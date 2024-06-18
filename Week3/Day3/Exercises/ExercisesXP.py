import datetime
import random
import string
from datetime import datetime
from faker import Faker

# Exercise 1


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    #Your code starts HERE
    def __repr__(self):
        return f"{self.amount} {self.currency}"

    def __str__(self) -> str:
        amount = (f'{self.amount} {self.currency}')
        print(amount)
        return amount

    def __int__(self) -> int:
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return Currency(self.amount + other.amount, self.currency)
            else:
                raise TypeError(f"Cannot add between Currency type {other.currency} and {self.currency}")
        elif isinstance(other, (int, float)):  # Allow int or float for addition
            return Currency(self.amount + other, self.currency)
        else:
            raise TypeError(f"Unsupported type for addition: {type(other)}")


    def __iadd__(self, other):
        if isinstance(other, Currency):
            self.amount += other.amount

        elif isinstance(other, (int, float)):  # Allow int or float for addition
            self.amount += other
        else:
            raise TypeError(f"Unsupported type for addition: {type(other)}")
        return self


c1 = Currency('dollars', 5)
c2 = Currency('dollars', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

str(c1)
print(int(c1))
print(repr(c1))

print(c1 + 5)
print(c1 + c2)

print(c1)

c1 += 5
print(c1)

c1 += c2
print(c1)

# c1+c3

# I can't understand why it prints each twice


# Exercise 3
res = ''.join(random.choices(string.ascii_uppercase +
                             string.ascii_lowercase, k=5))




# Exercise 4
print(datetime.today())


# Exercise 5
diff = datetime(2025,1,1) - datetime.now()
print(f'the 1st of January is in {diff.days} days and {diff.seconds} seconds.')


# Exercise 6
def minutes_lived(birthdate_str):
    birthdate = datetime.strptime(birthdate_str, "%Y-%m-%d")

    now = datetime.now()

    time_difference = now - birthdate

    minutes = time_difference.total_seconds() / 60

    print(f"You have lived approximately {int(minutes):,} minutes in your life.")

birthday = '1998-12-08'
minutes_lived(birthday)


# Exercise 7
fake = Faker()
users = []
def new_data():
    return {'name': fake.name(),'address': fake.address(), 'language_code': fake.language_code() }

users.append(new_data())
users.append(new_data())
