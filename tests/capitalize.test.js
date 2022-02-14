import capitalize from '../src/capitalize';

it('capitalize exists', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

it('empty string', () => {
    expect(capitalize('')).toBe('');
});

it('one letter', () => {
    expect(capitalize('a')).toBe('A');
});

it('two letters', ()=> {
    expect(capitalize('ab')).toBe('Ab');
});

it('already uppercase', () => {
    expect(capitalize('HELLO WORLD')).toBe('HELLO WORLD');
});

it('numbers', () => {
    expect(capitalize('12343213123123')).toBe('12343213123123');
});

it('symbols', () => {
    expect(capitalize('@#$%@#$%$%$%')).toBe('@#$%@#$%$%$%');
});

it('letters with symbols', () => {
    expect(capitalize('a@#$%@#$%$%$%')).toBe('A@#$%@#$%$%$%');
});
