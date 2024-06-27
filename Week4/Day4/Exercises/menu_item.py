import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = ''
DATABASE = 'menuitems'

class MenuItem:
    def __init__(self, name, price):
        self.price = price
        self.name = name

    def save(self):
        query = f"insert into menu_items(item_name, item_price) values ('{self.name}', {self.price})"

        return run_query(query)

    def delete(self):
        query = f"delete from menu_items where item_name = '{self.name}' and item_price =  {self.price}"
        return run_query(query)

    def update(self, id):
        query = f"update menu_items set item_price = {self.price}, item_name = '{self.name}' where  item_id = {id}"
        return run_query(query)


def run_query(query):
    connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD,  dbname=DATABASE )
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    connection.close()

MenuItem('chips', '5').save()
print()