from flask import Flask, render_template, request, redirect, flash, session, url_for, abort

app = Flask(__name__)


@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/log')
def log():
    return render_template('login.html')
@app.errorhandler(404)
def pageNotFount(error):
 return render_template('page404.html', title="Страница не найдена")


@app.route("/")
def index():
 return render_template("index.html")




@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        return "Login via the login Form"
    if request.method == 'POST':
        password = request.form['password']
        if password == '123':
            flash('Login successful')
            return render_template('Success.html')
        else:
            return redirect(url_for('log'))
            #abort(401) #некст пример


app.secret_key = 'secret_key'
if __name__ == "__main__":
    app.run(debug=True)