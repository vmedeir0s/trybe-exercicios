-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).

SELECT COUNT(*) AS quantidade, job_id 
FROM hr.employees
WHERE job_id = 'IT_PROG';