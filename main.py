from flask import Flask, render_template, request, redirect, jsonify
import mariadb
import sys

# Подключение к базе данных
try:
        conn = mariadb.connect(user="root", password="lizliz31415", host="127.0.0.1", port=3476, database="Talartis")
        print("succsefull")
except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)

UPLOAD_FOLDER = 'doc'
ALLOWED_EXTENSIONS = {'doc'}

app = Flask(__name__, template_folder='templates')

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=["POST", "GET"])
def index():
    return render_template('main.html')


if __name__ == '__main__':
    app.run(debug=True)

# generator = Blueprint('generator', __name__, template_folder='templates', static_folder='static')