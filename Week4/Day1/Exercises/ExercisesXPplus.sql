CREATE TABLE students (
   id SERIAL
);

ALTER TABLE students
ADD COLUMN last_name VARCHAR(20),
ADD COLUMN first_name VARCHAR(20),
ADD COLUMN birth_date DATE;


INSERT INTO public.students (id, first_name, last_name, birth_date)
VALUES 
  (1, 'Marc', 'Benichou', TO_DATE('02/11/1998', 'DD/MM/YYYY')),
  (2, 'Yoan', 'Cohen', TO_DATE('03/12/2010', 'DD/MM/YYYY')),
  (3, 'Lea', 'Benichou', TO_DATE('27/07/1987', 'DD/MM/YYYY')),
  (4, 'Amelia', 'Dux', TO_DATE('07/04/1996', 'DD/MM/YYYY')),
  (5, 'David', 'Grez', TO_DATE('14/06/2003', 'DD/MM/YYYY')),
  (6, 'Omer', 'Simpson', TO_DATE('03/10/1980', 'DD/MM/YYYY'));


select * from students
	
select first_name, last_name from students

select first_name, last_name from students
where id=2


select first_name, last_name from students
where first_name = 'Marc' and last_name = 'Benichou'

select first_name, last_name from students
where last_name = 'Benichou' or first_name = 'Marc'


SELECT first_name, last_name  FROM students
WHERE first_name LIKE '%a'


SELECT  first_name, last_name FROM students
WHERE first_name LIKE 'A%';


SELECT first_name, last_name 
FROM students
WHERE first_name LIKE '%a';


SELECT first_name, last_name 
FROM students
WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) = 'a';


SELECT first_name, last_name
FROM students
WHERE id IN (1, 3);


SELECT *
FROM students
WHERE birth_date >= TO_DATE('01/01/2000', 'DD/MM/YYYY');



