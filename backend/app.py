from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from database.database import initialize_database
from database.database import get_db_connection
from models.user import get_user_by_phone
from models.user import verify_user
from werkzeug.security import generate_password_hash
import os
import random
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
app = Flask(__name__)
CORS(app)
initialize_database()
def ensure_email_column():
    connection = get_db_connection()
    try:
        columns = connection.execute(
            "PRAGMA table_info(users)"
        ).fetchall()
        column_names = [
            column["name"]
            for column in columns
        ]
        if "email" not in column_names:
            connection.execute(
                "ALTER TABLE users ADD COLUMN email TEXT"
            )
            connection.commit()
            print(
                "Email column added to database."
            )
        else:
            print(
                "Database email column already exists."
            )
    finally:
        connection.close()
ensure_email_column()
EMAIL_ADDRESS = os.getenv(
    "EMAIL_ADDRESS"
)
EMAIL_APP_PASSWORD = os.getenv(
    "EMAIL_APP_PASSWORD"
)
otp_storage = {}
@app.route("/")
def home():
    return "GreenPath Backend Running Successfully"
@app.route(
    "/api/signup",
    methods=["POST"]
)
def signup():
    data = request.get_json() or {}
    name = data.get(
        "name",
        ""
    ).strip()
    phone = data.get(
        "phone",
        ""
    ).strip()
    email = data.get(
        "email",
        ""
    ).strip().lower()
    password = data.get(
        "password",
        ""
    )
    if not name:
        return jsonify({
            "success": False,
            "message": "Name is required."
        }), 400
    if not phone:
        return jsonify({
            "success": False,
            "message": "Phone number is required."
        }), 400
    if not phone.isdigit() or len(phone) != 10:
        return jsonify({
            "success": False,
            "message":
                "Enter a valid 10-digit phone number."
        }), 400
    if not email:
        return jsonify({
            "success": False,
            "message":
                "Email address is required."
        }), 400
    if "@" not in email:
        return jsonify({
            "success": False,
            "message":
                "Enter a valid email address."
        }), 400
    if len(password) < 6:
        return jsonify({
            "success": False,
            "message":
                "Password must contain at least 6 characters."
        }), 400
    existing_phone = get_user_by_phone(
        phone
    )
    if existing_phone:
        return jsonify({
            "success": False,
            "message":
                "An account with this phone number already exists."
        }), 409
    connection = get_db_connection()
    try:
        existing_email = connection.execute(
            """
            SELECT id
            FROM users
            WHERE LOWER(email) = ?
            """,
            (email,)
        ).fetchone()
        if existing_email:
            return jsonify({
                "success": False,
                "message":
                    "An account with this email already exists."
            }), 409
        hashed_password = generate_password_hash(
            password
        )
        cursor = connection.execute(
            """
            INSERT INTO users
            (
                name,
                phone,
                email,
                password
            )
            VALUES (?, ?, ?, ?)
            """,
            (
                name,
                phone,
                email,
                hashed_password
            )
        )
        connection.commit()
        user_id = cursor.lastrowid
        return jsonify({
            "success": True,
            "message":
                "Account created successfully.",
            "user": {
                "id": user_id,
                "name": name,
                "phone": phone,
                "email": email
            }
        })
    except Exception as error:
        connection.rollback()
        print(
            "SIGNUP ERROR:",
            error
        )
        return jsonify({
            "success": False,
            "message":
                "Unable to create account."
        }), 500
    finally:
        connection.close()
@app.route(
    "/api/login",
    methods=["POST"]
)
def login():
    data = request.get_json() or {}
    phone = data.get(
        "phone",
        ""
    ).strip()
    password = data.get(
        "password",
        ""
    )
    if not phone or not password:
        return jsonify({
            "success": False,
            "message":
                "Phone number and password are required."
        }), 400
    user = verify_user(
        phone,
        password
    )
    if not user:
        return jsonify({
            "success": False,
            "message":
                "Invalid phone number or password."
        }), 401
    return jsonify({
        "success": True,
        "message":
            "Login successful.",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "phone": user["phone"],
            "email":
                user["email"]
                if "email" in user.keys()
                else None
        }
    })
@app.route(
    "/api/profile/<int:user_id>",
    methods=["GET"]
)
def profile(user_id):
    connection = get_db_connection()
    try:
        user = connection.execute(
            """
            SELECT
                id,
                name,
                phone,
                email,
                created_at
            FROM users
            WHERE id = ?
            """,
            (user_id,)
        ).fetchone()
        if not user:
            return jsonify({
                "success": False,
                "message":
                    "User not found."
            }), 404
        return jsonify({
            "success": True,
            "user": {
                "id": user["id"],
                "name": user["name"],
                "phone": user["phone"],
                "email": user["email"],
                "created_at":
                    user["created_at"]
            }
        })
    finally:
        connection.close()
@app.route(
    "/api/send-otp",
    methods=["POST"]
)
def send_otp():
    data = request.get_json() or {}
    email = data.get(
        "email",
        ""
    ).strip().lower()
    if not email:
        return jsonify({
            "success": False,
            "message":
                "Email address is required."
        }), 400
    connection = get_db_connection()
    try:
        user = connection.execute(
            """
            SELECT id
            FROM users
            WHERE LOWER(email) = ?
            """,
            (email,)
        ).fetchone()
    finally:
        connection.close()
    if not user:
        return jsonify({
            "success": False,
            "message":
                "No GreenPath account is registered with this email."
        }), 404
    if not EMAIL_ADDRESS:
        return jsonify({
            "success": False,
            "message":
                "Email configuration is missing."
        }), 500
    if not EMAIL_APP_PASSWORD:
        return jsonify({
            "success": False,
            "message":
                "Email App Password is missing."
        }), 500
    otp = str(
        random.randint(
            100000,
            999999
        )
    )
    otp_storage[email] = {
        "otp": otp,
        "expires_at":
            time.time() + 300,
        "verified": False
    }
    message = MIMEMultipart()
    message["From"] = EMAIL_ADDRESS
    message["To"] = email
    message["Subject"] = (
        "GreenPath Password Reset OTP"
    )
    body = f"""
Hello,
Your GreenPath password reset OTP is:
{otp}
This OTP is valid for 5 minutes.
If you did not request this password reset,
please ignore this email.
Regards,
GreenPath
"""
    message.attach(
        MIMEText(
            body,
            "plain"
        )
    )
    try:
        print(
            "Connecting to Gmail..."
        )
        with smtplib.SMTP(
            "smtp.gmail.com",
            587,
            timeout=30
        ) as server:
            server.starttls()
            server.login(
                EMAIL_ADDRESS,
                EMAIL_APP_PASSWORD
            )
            server.sendmail(
                EMAIL_ADDRESS,
                email,
                message.as_string()
            )
        print(
            "OTP EMAIL SENT SUCCESSFULLY"
        )
        return jsonify({
            "success": True,
            "message":
                "OTP sent successfully."
        })
    except smtplib.SMTPAuthenticationError:
        print(
            "GMAIL AUTHENTICATION ERROR"
        )
        return jsonify({
            "success": False,
            "message":
                "Gmail authentication failed. Check your App Password."
        }), 500
    except Exception as error:
        print(
            "EMAIL ERROR:",
            error
        )
        return jsonify({
            "success": False,
            "message":
                "Unable to send OTP."
        }), 500
@app.route(
    "/api/verify-otp",
    methods=["POST"]
)
def verify_otp():
    data = request.get_json() or {}
    email = data.get(
        "email",
        ""
    ).strip().lower()
    entered_otp = data.get(
        "otp",
        ""
    ).strip()
    saved = otp_storage.get(
        email
    )
    if not saved:
        return jsonify({
            "success": False,
            "message":
                "OTP not found. Please request a new OTP."
        }), 400
    if time.time() > saved["expires_at"]:
        del otp_storage[email]
        return jsonify({
            "success": False,
            "message":
                "OTP expired. Please request a new OTP."
        }), 400
    if entered_otp != saved["otp"]:
        return jsonify({
            "success": False,
            "message":
                "Invalid OTP."
        }), 400
    saved["verified"] = True
    return jsonify({
        "success": True,
        "message":
            "OTP verified successfully."
    })
@app.route(
    "/api/reset-password",
    methods=["POST"]
)
def reset_password():
    data = request.get_json() or {}
    email = data.get(
        "email",
        ""
    ).strip().lower()
    new_password = data.get(
        "password",
        ""
    )
    if len(new_password) < 6:
        return jsonify({
            "success": False,
            "message":
                "Password must contain at least 6 characters."
        }), 400
    saved = otp_storage.get(
        email
    )
    if not saved:
        return jsonify({
            "success": False,
            "message":
                "Reset session expired. Please request a new OTP."
        }), 400
    if not saved["verified"]:
        return jsonify({
            "success": False,
            "message":
                "Please verify the OTP first."
        }), 400
    if time.time() > saved["expires_at"]:
        del otp_storage[email]
        return jsonify({
            "success": False,
            "message":
                "OTP expired. Please request a new OTP."
        }), 400
    connection = get_db_connection()
    try:
        user = connection.execute(
            """
            SELECT id
            FROM users
            WHERE LOWER(email) = ?
            """,
            (email,)
        ).fetchone()
        if not user:
            return jsonify({
                "success": False,
                "message":
                    "Account not found."
            }), 404
        hashed_password = generate_password_hash(
            new_password
        )
        connection.execute(
            """
            UPDATE users
            SET password = ?
            WHERE id = ?
            """,
            (
                hashed_password,
                user["id"]
            )
        )
        connection.commit()
        del otp_storage[email]
        return jsonify({
            "success": True,
            "message":
                "Password reset successfully."
        })
    except Exception as error:
        connection.rollback()
        print(
            "RESET PASSWORD ERROR:",
            error
        )
        return jsonify({
            "success": False,
            "message":
                "Unable to reset password."
        }), 500
    finally:
        connection.close()
if __name__ == "__main__":
    print("")
    print("======================================")
    print("       GREENPATH BACKEND")
    print("======================================")
    print("Server starting...")
    print("")
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )