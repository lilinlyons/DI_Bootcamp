CREATE TABLE items (
    items VARCHAR(20),
    price INTEGER,
    id INTEGER
);


INSERT INTO items VALUES('Small Desk', 100, 1) 
INSERT INTO items VALUES('Larg Desk', 300, 2) 
INSERT INTO items VALUES('Fan', 80, 3) 


	
CREATE TABLE customers(
 id INTEGER,
 firstname VARCHAR(20),
 lastname VARCHAR(20)
);


INSERT INTO customers VALUES (1, 'Greg', 'Jones');
INSERT INTO customers VALUES (2, 'Sandra', 'Jones');
INSERT INTO customers VALUES (3, 'Scott', 'Scott');
INSERT INTO customers VALUES (4, 'Trevor', 'Green');
INSERT INTO customers VALUES (5, 'Melanie', 'Johnson');


SELECT * FROM items
SELECT * FROM customers

SELECT * FROM items
WHERE price > 80;


SELECT * FROM items
WHERE price <= 300

SELECT * FROM customers
WHERE lastname = 'Smith';


SELECT * FROM customers
WHERE lastname = 'Jones';

SELECT * FROM customers
WHERE firstname != 'Scott';
