import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = ''
DATABASE = 'menuitems'

class MenuManager:
    def __init__(self, name):
        self.name = name


    def get_by_name(self):
        query = f"select * from menu_items where item_name like '%{self.name}%'"
        if run_query(query) == None:
            return None

        else:
            return run_query(query)


    def all_items(self):
        query = 'select * from menu_items'
        return run_query(query)


def run_query(query):
    connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD,  dbname=DATABASE )
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    connection.close()


MenuManager('hello').get_by_name()