from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Функция для установления соединения с базой данных
def get_db_connection():
    conn = sqlite3.connect('flsite.db')
    conn.row_factory = sqlite3.Row
    return conn

# Создание таблицы, если она не существует
def create_table():
    conn = get_db_connection()
    with conn:
        conn.execute('''CREATE TABLE IF NOT EXISTS mainmenu (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text,
            url text
        )''')

# Операция INSERT INTO в базу данных
def insert_into_table(value1, value2):
    conn = get_db_connection()
    with conn:
        conn.execute("INSERT INTO mainmenu (title, url) VALUES (?, ?)", (value1, value2))



# Роут для обработки POST-запроса с данными для вставки
@app.route('/insert_data', methods=['POST'])
def insert_data():
    value1 = request.form['value1']
    value2 = request.form['value2']
    insert_into_table(value1, value2)
    return 'Данные успешно добавлены в таблицу!'


# Функция для получения данных из базы данных
def get_data_from_table():
    conn = sqlite3.connect('flsite.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM mainmenu')
    rows = cursor.fetchall()
    conn.close()
    return rows

# Роут для обработки GET запроса
@app.route('/get_data', methods=['GET'])
def get_data():
    data = get_data_from_table()
    data_dict = []
    for row in data:
        data_dict.append(dict(row))
    return jsonify(data_dict)

# Запуск приложения Flask
if __name__ == '__main__':
    create_table()
    app.run()