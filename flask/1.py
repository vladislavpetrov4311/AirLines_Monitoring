from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)


@app.route('/form')
def form():
    return render_template('form.html')


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        return "Login via the login Form"

    if request.method == 'POST':
        password = request.form['password']
        if password == '123':
            # The following flash message will be displayed on successful login
            flash('Login successful')
            return render_template('success.html')
        else:
            return redirect('/form')

app.secret_key = 'secret_key'
if __name__ == "__main__":
    app.run(debug=True)