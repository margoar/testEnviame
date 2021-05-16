UPDATE employees e, countries p, continents c
SET e.salary = e.salary + (e.salary * c.anual_adjustment/100)
WHERE e.country_id = p.id 
AND p.continent_id = c.id 
AND e.salary <= 5000;
