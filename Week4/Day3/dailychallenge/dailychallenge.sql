create table customer (
	customer_id serial primary key,
	first_name varchar(20),
	last_name varchar(20) NOT NULL
);

create table customer_profile(
	customer_id integer not null,
	isLoggedIn boolean default false,
	primary key (customer_id),
	CONSTRAINT customer_id FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
	
)

insert into customer (first_name, last_name)
	values
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive')

insert into customer_profile(customer_id, isLoggedIn) values
((select customer_id from customer where first_name = 'John'), True)

	
insert into customer_profile(customer_id, isLoggedIn) values
((select customer_id from customer where first_name = 'Jerome'), False)


select first_name from customer

left join customer_profile on customer_profile.customer_id = customer.customer_id
where customer_profile.isloggedin = True;



select customer.first_name, customer_profile.isloggedin from customer
left join customer_profile on customer_profile.customer_id = customer.customer_id


select count(*) from customer
left join customer_profile on customer_profile.customer_id = customer.customer_id
where customer_profile.isloggedin = False;


create table book(
	book_id serial primary key,
	title varchar(30) not null,
	author varchar(20) not null
)

insert into book (title, author) values
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')


create table student(
student_id serial primary key,
	name varchar(20) not null unique,
	age int
	
)

ALTER TABLE student
ADD CONSTRAINT check_age_max_value CHECK (age <= 15);

insert into student(name, age) values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)


create table library (
	book_fk_id int,
	student_fk_id int,
	borrowed_date date,
	FOREIGN KEY (book_fk_id) REFERENCES book(book_id) on delete cascade on update cascade,
	FOREIGN KEY (student_fk_id) REFERENCES student(student_id) on delete cascade on update cascade,
	primary key(book_fk_id, student_fk_id)
)


INSERT into library(book_fk_id, student_fk_id, borrowed_date) VALUES 
((SELECT book_id FROM book where title = 'Alice In Wonderland' ), 
(SELECT student_id FROM student where name = 'John'), TO_DATE('15/02/2022', 'DD/MM/YYYY')),
((SELECT book_id FROM book where title = 'To kill a mockingbird' ), 
(SELECT student_id FROM student where name = 'Bob'), TO_DATE('03/03/2021', 'DD/MM/YYYY')),
((SELECT book_id FROM book where title = 'Alice In Wonderland' ), 
(SELECT student_id FROM student where name = 'Lera'), TO_DATE('23/05/2021', 'DD/MM/YYYY')),
((SELECT book_id FROM book where title = 'Harry Potter' ), 
(SELECT student_id FROM student where name = 'Bob'), TO_DATE('12/08/2021
', 'DD/MM/YYYY'))


select * from library

select student.name, book.title from book
left join library on book.book_id = library.book_fk_id
right join student on library.student_fk_id = student.student_id



select avg(student.age) from book
left join library on book.book_id = library.book_fk_id
right join student on library.student_fk_id = student.student_id
where book.title = 'Alice In Wonderland'

delete from student where student.name = 'John'

-- John entry deleted from both parent and child table




