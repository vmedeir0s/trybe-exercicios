
-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT ROUND(MIN(salary), 2) AS menor_salário, ROUND(SUM(salary),2) AS soma_de_todos_salários, ROUND(AVG(salary),2) AS média_dos_salários FROM hr.employees;