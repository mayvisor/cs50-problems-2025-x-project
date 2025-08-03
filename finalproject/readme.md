# The ADHD HyperFocus Timer helper

#### Video Demo: <URL HERE>

#### Description:
This web app was created to aid those of us who struggle with ADHD on a daily basis.
it provides a hyperfocus 15 minute timer, to give a timeline to the user and "inspire" the hyperfocus against the clock.
it also provides a customizable timer for smaller tasks.
as well as a task submition form to enter the things that have been accomplished throughout the day, it is important to have them listed
because most people with ADHD feel like they don't do enough.

#### Technologies Used:
- Python (Flask framework)
- HTML
- CSS
- JavaScript
- SQL (SQLite3 database)

#### Features:
* Hyperfocus Timer
* customizable smaller timer for smaller tasks
* Task tracker page


#### Files and Structure:
 `app.py`: The main Flask application file, handling routing and business logic.
- `templates/`: Directory containing HTML templates for the user interface.
    - `index.html`: dashboard for displaying timers.
    - `layout.html`: Main page structuring the web app.
    - `tasks.html`: Page to keep track of tasks.
- `static/`: Directory for static files like CSS and JavaScript.
    - `style.css`: Stylesheet for the application's appearance.
    - `script.js`: Client-side JavaScript for timers and tasks.
- `models.db`: SQLite database file storing user and task data.
- `init_db.py`: one time setup script that creates the SQLite datebase (models.db).

#### Design Choices:
Flask and Python seemed like the obvious choice after working with the Finance problem, they are to the point and allow for
clean code.
css allowed me to customize the page as I wanted it to look in an easy and intuitive manner.
SQLite helped me create the tables for the tasks without any issues.

#### Installation and Setup:
1. Navigate into `cd finalproject`
2. Navigate to `cd app.py`
3. On the terminal window, type `python app.py`
4. Navigate to the browser window.
5. Utilize the timers or navigate to the tasks.

#### Usage:
1. Use the hyperfocus timer to complete larger tasks, In increments of 15 minutes.
2. Use the customizable timer to complete smaller tasks.
3. log in your tasks with a timestamp to create a record of your days.

#### Challenges and Learnings:
After having to code Finance 5 times, it helped me understand the code better. I had trouble with the timers, as I was not routing them
properly and couldn't make them work.
