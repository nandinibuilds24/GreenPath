from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from database.database import get_db_connection
def create_user(
    name,
    phone,
    password
):
    connection = get_db_connection()
    try:
        hashed_password = generate_password_hash(
            password
        )
        cursor = connection.execute(
            """
            INSERT INTO users
            (
                name,
                phone,
                password
            )
            VALUES (?, ?, ?)
            """,
            (
                name,
                phone,
                hashed_password
            )
        )
        connection.commit()
        return cursor.lastrowid
    except Exception as error:
        print(
            "CREATE USER ERROR:",
            error
        )
        connection.rollback()
        return None
    finally:
        connection.close()
def get_user_by_phone(phone):
    connection = get_db_connection()
    try:
        user = connection.execute(
            """
            SELECT *
            FROM users
            WHERE phone = ?
            """,
            (phone,)
        ).fetchone()
        return user
    finally:
        connection.close()
def verify_user(
    phone,
    password
):
    user = get_user_by_phone(
        phone
    )
    if not user:
        print(
            "LOGIN ERROR: User not found:",
            phone
        )
        return None
    try:
        correct = check_password_hash(
            user["password"],
            password
        )
    except Exception as error:
        print(
            "PASSWORD CHECK ERROR:",
            error
        )
        return None
    if correct:
        print(
            "LOGIN SUCCESS:",
            phone
        )
        return user
    print(
        "LOGIN ERROR: Password does not match."
    )
    return None