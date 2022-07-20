-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.

SELECT AVG(salary), COUNT(*) as numeros_funcionarios FROM hr.employees
GROUP BY department_id
HAVING numeros_funcionarios > 10;