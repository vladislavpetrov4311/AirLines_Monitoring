from flask import Flask
from flask import render_template
from flask import  url_for

app = Flask(__name__)

menu = ["Установка", "Первое приложение", "Обратная связь"]
@app.route("/")
def index():
 return render_template('index.html', menu = menu)
@app.route("/base")
def base():
 return render_template('base.html', title = "О сайте", menu = menu)

@app.route("/profile/<username>")
def profile(username):
 return f"Пользователь: {username}"

 with app.test_request_context():
  print(url_for('index'))
  print(url_for('base'))
  print(url_for('profile', username="selfedu"))

if __name__ == "__main__":
 app.run(debug=True)