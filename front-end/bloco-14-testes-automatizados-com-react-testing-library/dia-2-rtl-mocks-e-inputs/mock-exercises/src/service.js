

const random = () => Math.floor(Math.random() * (100 - 0 + 1)) + 0

const upper = (string) => string.toUpperCase();

const letter = (string) => string.charAt(0);

const concat = (string1, string2) => string1.concat(' ', string2)

const api = () => {
  global.fetch("https://dog.ceo/api/breeds/image/random");
  
}

api()

module.export = { random, upper, letter, concat, api }