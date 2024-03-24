from flask import Flask, request, jsonify, flash, render_template
import sqlite3
from FDataBase import FDataBase
import time
import math

app = Flask(__name__)


class FDataBase:
 def __init__(self, db):
  self.__db = db
  self.__cur = db.cursor()
 def getMenu(self):
  sql = '''SELECT * FROM mainmenu'''
  try:
   self.__cur.execute(sql)
   res = self.__cur.fetchall()
   if res: return res
  except:
   print("Ошибка чтения из БД")
  return []


@app.route("/add_post", methods=["POST", "GET"])
def addPost():
 db = get_db()
 dbase = FDataBase(db)
 if request.method == "POST":
  if len(request.form['name']) > 4 and len(request.form['post']) > 10:
   res = dbase.addPost(request.form['name'], request.form['post'])
   if not res:
    flash('Ошибка добавления статьи', category = 'error')
   else:
    flash('Статья добавлена успешно', category='success')
  else:
   flash('Ошибка добавления статьи', category='error')
 return render_template('add_post.html', menu = dbase.getMenu(), title="Добавление статьи")



def addPost(self, title, text):
 try:
  tm = math.floor(time.time())
  self.__cur.execute("INSERT INTO posts VALUES(NULL, ?, ?, ?)", (title, text, tm))
  self.__db.commit()
  except sqlite3.Error as e:
   print("Ошибка добавления статьи в БД "+str(e))
   return False
  return True


@app.route("/post/<int:id_post>")
def showPost(id_post):
 db = get_db()
  dbase = FDataBase(db)
  title, post = dbase.getPost(id_post)
  if not title:
   abort(404)
  return render_template('post.html', menu=dbase.getMenu(), title=title, post=post)



@app.route("/")
def index():
 db = get_db()
 dbase = FDataBase(db)
 return render_template('index.html', menu = dbase.getMenu())



# Запуск приложения Flask
if __name__ == '__main__':
    create_table()
    app.run()