import reverseString from "../src/reverse_string";

it("reverseString exists", () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})

it('string of numbers', () => {
    expect(reverseString('1234567890')).toBe('0987654321')
})

it('empty string', ()=> {
    expect(reverseString('')).toBe('')
})

it('a number', () => {
    expect(reverseString(1234567)).toBe('7654321')
})


