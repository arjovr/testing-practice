import caesarCipher from '../src/caesar_cipher';

it('caesarCipher exists', () => {
  expect(caesarCipher('newbie', 13)).toBe('arjovr');
});

it('shift 5', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

it('shift 17', () => {
  expect(caesarCipher('attack at dawn', 17)).toBe('rkkrtb rk urne');
});

it('punctuation', () => {
  expect(caesarCipher('Don’t forget to test punctuation!')).toBe(
    'qba’g sbetrg gb grfg chapghngvba!'
  );
});
