import analyzeArray from '../src/analyze_array';

it('analyzeArray exists', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it('empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
