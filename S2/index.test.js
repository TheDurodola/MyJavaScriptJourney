const {getEvenNumbers, createCounter }= require('./function');

test("test that function returns even numbers", () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedOutput = [2, 4, 6, 8, 10];
    
    expect(getEvenNumbers(arrayOfNumbers)).toEqual(expectedOutput);
});



describe("createCounter", () => {
    test("should return a function", () => {
    const counter = createCounter();
    expect(counter.getCount()).toBe(0);
    });

    test("that the count increases by 1", () => {
     const counter = createCounter()
     counter.increment()
     expect(counter.getCount()).toBe(1);
    })   

    test("that the count increases by 2", ()=>{
        const counter = createCounter()
        counter.increment()
        counter.increment()
        expect(counter.getCount()).toBe(2);
    })

    test("that the count decreases by 2", ()=>{
        const counter = createCounter()
        counter.decrement()
        expect(counter.getCount()).toBe(-1);
        counter.increment()
        counter.increment()
        counter.increment()
        counter.decrement()
        expect(counter.getCount()).toBe(1)
    })

    test("test that count can be reset back to 0", ()=> {
        const counter = createCounter()
        counter.increment()
        counter.increment()
        counter.increment()
        expect(counter.getCount()).toBe(3)
        counter.reset()
        expect(counter.getCount()).toBe(0)
    })
    
})