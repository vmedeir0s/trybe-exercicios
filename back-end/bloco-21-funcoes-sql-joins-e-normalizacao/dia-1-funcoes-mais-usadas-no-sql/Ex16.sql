-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT CONCAT(UCASE(first_name), ' ', UCASE(last_name)) AS employee_name FROM hr.employees;