class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.pages = [self.items[i * self.pageSize:(i + 1) * self.pageSize] for i in range((len(self.items) + self.pageSize - 1) // self.pageSize )]
        self.visible_items = self.pages[0]

    def get_visible_items(self):
        return self.visible_items

    def prev_page(self):
        content = self.get_visible_items()
        current_page = self.pages.index(content)
        if current_page > 0:
            self.visible_items = self.pages[current_page-1]
            return self.visible_items

    def next_page(self):
        content = self.get_visible_items()
        current_page = self.pages.index(content)
        if current_page < len(self.pages) - 1:
            self.visible_items = self.pages[current_page+1]
            return self.visible_items

    def first_page(self):
        self.visible_items = self.pages[0]
        return self.visible_items

    def last_page(self):
        no_pages = len(self.pages)
        self.visible_items = self.pages[no_pages - 1]
        return self.visible_items

    def go_to_page(self, pageNum):
        self.visible_items = self.pages[pageNum-1]
        return self.visible_items

p = Pagination(list("abcdefghijklmnopqrstuvwxyz"), 4)
print(p.get_visible_items())
print(p.next_page())
print(p.get_visible_items())
print(p.prev_page())
print(p.get_visible_items())
print(p.first_page())
print(p.get_visible_items())
print(p.last_page())
print(p.get_visible_items())
print(p.go_to_page(4))
print(p.get_visible_items())