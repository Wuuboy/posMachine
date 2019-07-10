const caculateItemCounts = require('../main');

it ('should add two numbers', () => {
    expect(caculateItemCounts(['0001', '0003', '0005', '0003'])).toBe(true);
    // console.log(caculateItemCounts(['0001', '0003', '0005', '0003']))
});

// const getAllData = require('../main');
// it ('should add two numbers', () => {
//     expect(getAllData()).toBe(true);
// });

// const getSingleItemPrice = require('../main');
// it ('should add two numbers', () => {
//     expect(getSingleItemPrice()).toBe(true);
// });