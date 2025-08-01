const getPizzaTotal = require('./pizzaFunction');



test("should return the total price of pizzas", () => {
    const pizzas = 
        { Pepperoni: 0,
            Veggie: 2,
            ChickenSuya: 3
        };
           
    const expectedTotal = (0 * 7000) + (1 * 10000) + (2 * 15000);
        
    expect(getPizzaTotal(pizzas)).toBe(expectedTotal);
});
