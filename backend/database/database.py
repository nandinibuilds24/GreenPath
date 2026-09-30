import sqlite3
import os
BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)
DATABASE_PATH = os.path.join(
    BASE_DIR,
    "greenpath.db"
)
def get_db_connection():
    connection = sqlite3.connect(
        DATABASE_PATH
    )
    connection.row_factory = sqlite3.Row
    return connection
def initialize_database():
    connection = get_db_connection()
    connection.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE,
            password TEXT NOT NULL,
            created_at
                TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    connection.commit()
    connection.close()