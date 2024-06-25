-- Exercise 1

select distinct(name) from language

select film.title, film.description, language.name from language
left join film on film.language_id = language.language_id


select film.title, film.description, language.name from language
left join film on film.language_id = language.language_id

create table new_film(
	id serial primary key,
	name varchar(50)
	
)

insert into new_film (name) values
('The Godfather'),
('The Shawshank Redemption'),
('Fight Club')


create table customer_review(
	review_id serial primary key not null,
	film_id int,
	language_id int,
	foreign key (film_id) references new_film(id) on delete cascade,
	foreign key (language_id) references language(language_id),
	title varchar (50),
	score int,
	review_text text,
	last_update TIMESTAMP DEFAULT current_timestamp
	
);

ALTER TABLE customer_review
ADD CONSTRAINT check_score_range CHECK (score BETWEEN 1 AND 10);


insert into customer_review(film_id, language_id, title, score, review_text) values
((SELECT id FROM new_film where name = 'The Godfather' ), (SELECT language_id FROM language where name = 'English'),  'The Godfather', 8, 'Timeless masterpiece of crime and family, with iconic performances and unforgettable storytelling.')
((SELECT id FROM new_film where name = 'The Shawshank Redemption' ), (SELECT language_id FROM language where name = 'English'),  'The Shawshank Redemption', 10, 'The Shawshank Redemption: A timeless tale of hope, resilience, and redemption in unjust captivity.')


-- delete from new_film where name = 'The Shawshank Redemption'

-- Entry deleted from review table


-- Exercise 2

update film
set language_id = 4
where title = 'Academy Dinosaur'

select * from film
where title like '%Academy Dinosaur%'


-- Customer address is the only foreign key. Insert can only be done if an address_id doesnt exist already from the address table.


-- drop table customer_review
-- easy step

select COUNT(*) - COUNT(return_date)  from rental

select * from rental
	left join inventory on inventory.inventory_id = rental.inventory_id
	left join film on inventory.film_id = film.film_id
where return_date is null
order by rental_rate desc
limit 30

select * from film
	left join film_actor on film.film_id = film_actor.film_id
left join actor on film_actor.actor_id = actor.actor_id
where actor.first_name = 'Penelope' and 
actor.last_name = 'Monroe'  and
film.description like '%Sumo%'

select * from film
where rating = 'R' and length <= 60 and description like '%Documentary%'

select * from customer
left join rental on customer.customer_id = rental.customer_id
left join inventory on inventory.inventory_id = rental.inventory_id
left join film on film.film_id = inventory.inventory_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and film.rental_rate >= 4
	and rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';



select * from customer
left join rental on customer.customer_id = rental.customer_id
left join inventory on inventory.inventory_id = rental.inventory_id
left join film on film.film_id = inventory.inventory_id
where (film.description like '%Boat%' or film.title like '%Boat%')
and film.replacement_cost > 15 and customer.first_name = 'Matthew' and customer.last_name = 'Mahan'

