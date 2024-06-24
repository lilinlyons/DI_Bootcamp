select * from customer

select first_name, last_name as "full_name" from customer


select distinct create_date from customer


select film_id, title, description, release_year, rental_rate from film
order by rental_rate asc


select address, phone from address
where district = 'Texas'


select * from film
where film_id in(15, 150)

	
select exists(select film_id, title, description, length, rating
	from film
	where title = 'Hannah Montana Movie')

	

select film_id, title, description, length, rating
	from film
	where title like 'Ha%'


select * from film
	order by rental_rate asc
limit 10

	
WITH ranked_rows AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY rental_rate asc) AS row_num
    FROM film
)
SELECT *
FROM ranked_rows
WHERE row_num BETWEEN 11 AND 20;


SELECT cs.first_name, cs.last_name, py.amount, py.payment_date
FROM customer AS cs
LEFT JOIN payment AS py ON cs.customer_id = py.customer_id
order by cs.customer_id


select * from inventory
full join film on inventory.film_id = film.film_id
where inventory.inventory_id is null


select city, country from city
left join country on city.country_id = country.country_id

select film.rental_rate, customer.first_name, customer.last_name, staff.last_update, staff.staff_id from film
full join inventory on inventory.film_id = film.film_id
full join staff on inventory.store_id = staff.store_id
full join customer on inventory.store_id = customer.store_id


