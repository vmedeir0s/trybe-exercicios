const { expect } = require('@jest/globals');
const {sum,myRemove} = require('./sum');

describe('Function sum', () => {
  it('Expects sum(4,5) = 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('Expects sum(0,0) = 0', ()=> {
    expect(sum(0,0)).toBe(0);
  });
  it('Throw an error when sum(4,"5") = 5 is string', () => {
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
  });
});

describe('Function myRemove', () => {
  it('Expects to return [1, 2 ,4]', () => {
    expect(myRemove([1,2,3,4],3)).toEqual([1, 2, 4]);
  });
  it('Expects to return [1,2, 4]')
});