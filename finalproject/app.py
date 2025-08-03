from flask import Flask, render_template, request, redirect
import sqlite3
from datetime import datetime

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('models.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/tasks", methods=["GET", "POST"])
def tasks():
    conn = get_db_connection()
    if request.method == "POST":
        task = request.form.get("task")
        if task:
            conn.execute("INSERT INTO tasks (description, timestamp) VALUES (?, ?)", (task, datetime.now()))
            conn.commit()
    tasks = conn.execute("SELECT * FROM tasks ORDER BY timestamp DESC").fetchall()
    conn.close()
    return render_template("tasks.html", tasks=tasks)

if __name__ == "__main__":
    app.run(debug=True)
