-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).

SELECT job_id, ROUND(AVG(salary), 2) as média_de_salarios FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY média_de_salarios DESC;