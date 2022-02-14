const analyzeArray = (numbers) => {
  let min = undefined;
  let max = undefined;
  let length = 0;
  let sum = 0;

  for (const n of numbers) {
    length++;
    if (n < (min || Infinity)) {
      min = n;
    }
    if (n > (max || -Infinity)) {
      max = n;
    }
    sum += n;
  }

  return {
    average: length > 0 ? sum / length : undefined,
    min,
    max,
    length,
  };
};

export default analyzeArray;
