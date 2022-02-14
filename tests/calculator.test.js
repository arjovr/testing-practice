import * as calculator from '../src/calculator';

it('calculator add exists', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it('add works with strings', () => {
  expect(calculator.add('1', '2')).toBe(3);
});

it('calculator substract exists', () => {
  expect(calculator.substract(45, 5)).toBe(40);
});

it('substract works on strings', () => {
  expect(calculator.substract('45', '6')).toBe(39);
});

it('multiply exists', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

it('multiply works on strings', () => {
  expect(calculator.multiply('2', '3')).toBe(6);
});

it('divide exists', () => {
  expect(calculator.divide(21, 7)).toBe(3);
});

it('divide works on strings', () => {
  expect(calculator.divide('21', '3')).toBe(7);
});
