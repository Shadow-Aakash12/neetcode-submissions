-- Write your query below

select c.name from customers c
LEFT JOIN orders o on o.customer_id = c.id
WHERE o.customer_id is null;
