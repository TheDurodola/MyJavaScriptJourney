const getEvenNumbers = require('./function');

test("test that function returns even numbers", () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedOutput = [2, 4, 6, 8, 10];
    
    expect(getEvenNumbers(arrayOfNumbers)).toEqual(expectedOutput);
});
