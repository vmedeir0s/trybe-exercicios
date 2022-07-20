-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT CONCAT('Quantidade de dinheiro necessária para pagar todos os ', COUNT(*), ' Funcionarios : ', SUM(salary)) AS total_payment FROM hr.employees;