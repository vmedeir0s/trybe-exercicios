const service = require('./service')

test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  service.random = jest.fn().mockReturnValue(10);
  expect(service.random()).toBe(10)
  expect(service.random).toBeCalled();
  expect(service.random).toBeCalledTimes(1);
})

test('Teste 2', () => {
  service.random = jest.fn().mockImplementationOnce((a,b) => a / b);
  expect(service.random(10,2)).toBe(5);
  expect(service.random).toBeCalledWith(10,2)
  expect(service.random).toBeCalled();
  expect(service.random).toBeCalledTimes(1)

})

test('Teste 3', () => {
  service.random = jest.fn().mockImplementation((a,b,c) => a * b * c);
  expect(service.random(1,2,3)).toBe(6);
  expect(service.random).toBeCalled();
  expect(service.random).toBeCalledTimes(1);
  expect(service.random).toBeCalledWith(1,2,3);
})

test('Teste 4', () => {
  service.upper = jest.fn().mockImplementation((string) => string.toLowerCase());
  service.letter = jest.fn().mockImplementation((string) => string.charAt(string.length - 1));
  service.concat = jest.fn().mockImplementation((string1, string2, string3) => string1 + ' ' + string2 + ' ' + string3)
  expect(service.upper('VINICIUS')).toBe('vinicius');
  expect(service.letter('Vinicius')).toBe('s');
  expect(service.concat('Vinicius','De','Medeiros')).toBe('Vinicius De Medeiros');
})

test('Test 5', () => {
  
})