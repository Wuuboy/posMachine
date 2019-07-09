const add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

const isInRangeOf1to1000 = require('../main');

it ('should return true when startNumber and endNumber in 1 to 1000', () => {
    expect(isInRangeOf1to1000(2, 3)).toBe(true);
});

it ('should return true when startNumber and endNumber not in 1 to 1000', () => {
    expect(isInRangeOf1to1000(0, 3)).toBe(true);
});

it ('should return true when startNumber and endNumber not in 1 to 1000', () => {
    expect(isInRangeOf1to1000(10, 2000)).toBe(true);
});