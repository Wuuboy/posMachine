const printMultiplicationTable = require('../printMultiplicationTable');

it ('should return print when input startNumber and endNumber in 2 and 3', () => {
    expect(printMultiplicationTable(2, 3)).toBe("2*2=4\n"+
                                                 "2*3=6  3*3=9\n"+
                                                 "2*4=8  3*4=12  4*4=16\n");
});