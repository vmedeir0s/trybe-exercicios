-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT * FROM pixar.movies;

SELECT * FROM pixar.box_office;

SELECT pixar.movies.title, CONCAT('$ ', pixar.box_office.domestic_sales + pixar.box_office.international_sales) AS total_sales FROM pixar.movies
INNER JOIN pixar.box_office
ON pixar.box_office.movie_id = pixar.movies.id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT pixar.movies.title, CONCAT('$ ', pixar.box_office.domestic_sales + pixar.box_office.international_sales) AS total_sales FROM pixar.movies
INNER JOIN pixar.box_office
ON pixar.movies.id = pixar.box_office.movie_id
WHERE pixar.box_office.international_sales > pixar.box_office.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT title, rating FROM pixar.movies
INNER JOIN pixar.box_office
ON pixar.movies.id = pixar.box_office.movie_id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
  pixar.theater.name,
  pixar.theater.location,
  pixar.movies.title,
  pixar.movies.director,
  pixar.movies.year,
  pixar.movies.length_minutes
FROM pixar.theater
LEFT JOIN pixar.movies
ON pixar.theater.id = pixar.movies.theater_id
ORDER BY pixar.theater.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
  pixar.movies.title,
  pixar.movies.director,
  pixar.movies.year,
  pixar.movies.length_minutes,
  pixar.theater.id,
  pixar.theater.name,
  pixar.theater.location
FROM pixar.theater
RIGHT JOIN pixar.movies
ON pixar.movies.id = pixar.theater.id
ORDER BY pixar.theater.name;

-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT * FROM pixar.movies
INNER JOIN pixar.box_office
ON pixar.movies.id = pixar.box_office.movie_id
WHERE pixar.movies.theater_id IS NOT NULL
AND pixar.box_office.rating > 8;