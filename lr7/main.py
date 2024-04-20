import sys
from random import choices

from PyQt5 import uic
from PyQt5.QtWidgets import QApplication, QMainWindow, QFileDialog

# нужно для родного python312 в pip выполнить - pip install pyqt5
# потом запускаем из родной утитилиты python.exe
class App(QMainWindow):
    def __init__(self):
        super().__init__()
        uic.loadUi('form.ui', self)
        self.pushButton_2.clicked.connect(self.res)
        self.pushButton.clicked.connect(self.gen)


    def gen(self):
        Digit = '1234567890'
        Alpha_lower = 'qwertyuiopasdfghjklzxcvbnm'
        apha_upper = Alpha_lower.upper()
        Symbol = '~!@#$%%^$*()_+/<>'
        line = ''
        if self.checkBox_int.isChecked():
            line += Digit
        if self.checkBox_char.isChecked():
            line += Alpha_lower + apha_upper
        if self.checkBox_re.isChecked():
            line += Symbol
        data = []
        for el in range(self.countPASS.value()):
            data.append(''.join(choices(line, k=self.count_symbol.value())))
        fname = QFileDialog.getSaveFileName(self , 'Сохранить', '/passwords.txt')[0]
        with open(fname , 'w') as f:
            for el in data:
                f.write(el)
                f.write('\n')
        f.close()


    def res(self):
        self.countPASS.setValue(0)
        self.count_symbol.setValue(0)
        self.checkBox_int.setChecked(False)
        self.checkBox_char.setChecked(False)
        self.checkBox_re.setChecked(False)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = App()  # создаем экземпляр класса
    ex.show()  # показываем
    sys.exit(app.exec())
