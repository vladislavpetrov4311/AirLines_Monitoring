from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def index():
 return render_template("index.html")

@app.route("/about")
def about():
 return "<h1>О сайте</h1>"

menu = ["Установка", "Первое приложение", "Обратная связь"]
@app.route("/base")
def base():
 return render_template('base.html', title="BASE", menu=menu)

if __name__ == "__main__":
 app.run(debug=True)