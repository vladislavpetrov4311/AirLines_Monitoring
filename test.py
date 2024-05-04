import vk_api
import matplotlib.pyplot as plt
from datetime import datetime
import networkx as nx

session = vk_api.VkApi(token="your_token")

vk = session.get_api()


#Задание1
#Требуется написать функцию прогнозирования возраста
#пользователя по возрасту его друзей


def ask_1():
    friends = vk.friends.get(user_id='27792221127917', fields='bdate')

    # Извлечение возрастов друзей
    friends_ages = []
    for friend in friends['items']:
     bdate = friend.get('bdate')
     if bdate is not None and bdate.count('.') == 2:  # Проверяем, что дата рождения указана полностью
      bdate_parts = bdate.split('.')
      if len(bdate_parts) == 3:  # Учитываем формат dd.mm.yyyy или dd.mm.yy
       year = int(bdate_parts[2])
       age = 2024 - year
       friends_ages.append(age)

    res = sum(friends_ages)/len(friends_ages)
    return res

ask1 = ask_1()
#print(int(ask1))


#Задание2
#Требуется написать функцию, которая бы выводила график
#частоты переписки с указанным пользователем




def plot_message_frequency(user_id):
    messages = vk.messages.getHistory(user_id=user_id, count=200)  # Получаем последние 200 сообщений

    # Обработка сообщений и подсчет частоты переписки
    message_counts = {}
    for message in messages['items']:
        sender_id = message['from_id']
        if sender_id == user_id:  # Подсчитываем только сообщения, отправленные указанным пользователем
            date = message['date']
            date_obj = datetime.fromtimestamp(date)
            date_str = date_obj.strftime('%Y-%m-%d')
            if date_str in message_counts:
                message_counts[date_str] += 1
            else:
                message_counts[date_str] = 1

    # Построение графика частоты переписки
    dates = list(message_counts.keys())
    counts = list(message_counts.values())

    plt.figure(figsize=(10, 6))
    plt.bar(dates, counts, color='skyblue')
    plt.title('Частота переписки с пользователем {}'.format(user_id))
    plt.xlabel('Дата')
    plt.ylabel('Количество сообщений')
    plt.xticks(rotation=45)
    plt.show()

# Вызов функции с указанием id пользователя
#plot_message_frequency(277927912227) 




#Задание3
#Требуется написать функцию get_network(), которая для
#указанного списка пользователей users_ids строит граф и представляет его либо
#в виде матрицы смежности (as_edgelist=False), либо в виде списка ребер
#(as_edgelist=True). В полученном графе необходимо выделить и
#визуализировать результат

def get_network(user_ids, as_edgelist):
    # Создание графа
    G = nx.Graph()

    # Получение друзей для каждого пользователя
    for user_id in user_ids:
        response = vk.friends.get(user_id=user_id)
        friends = response['items']
        for friend in friends:
            G.add_edge(user_id, friend)

    # Визуализация графа
    pos = nx.spring_layout(G)

    if as_edgelist:
        return list(G.edges())
    else:
        plt.figure(figsize=(10, 6))
        nx.draw(G, pos, with_labels=True, node_color='lightblue', edge_color='grey', font_size=10, node_size=500,
                font_weight='bold')
        plt.title('Социальный граф пользователей')
        plt.show()


get_network([1112772927917, 1112160817878], False)
