const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const caesarCipher = (str, n = 13) => {
  str = str.toLowerCase();
  let ret = '';
  for (const s of str) {
    const idx = s.charCodeAt(0) - 'a'.charCodeAt(0);
    if (idx < 0 || idx > alphabet.length - 1) {
      ret += s;
      continue;
    }
    ret += alphabet[(idx + n) % alphabet.length];
  }
  return ret;
};

export default caesarCipher;
