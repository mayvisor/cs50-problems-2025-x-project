import sqlite3

conn = sqlite3.connect("models.db")

conn.execute("""
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
""")

conn.commit()
conn.close()

print("Database initialized.")
