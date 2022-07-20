-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT first_name AS nome, last_name AS sobrenome, CONCAT(DATEDIFF(CURRENT_DATE(), hire_date), ' dias') AS dias_trabalhados 
FROM hr.employees
ORDER BY dias_trabalhados DESC;