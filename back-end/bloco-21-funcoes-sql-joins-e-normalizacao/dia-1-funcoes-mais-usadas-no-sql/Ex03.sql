-- 3. Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.

SELECT AVG(salary) AS média_salarial, job_id
FROM hr.employees
GROUP BY job_id
ORDER BY média_salarial DESC;