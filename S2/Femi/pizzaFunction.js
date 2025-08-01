function getPizzaTotal(pizza) {
    arrayOfAllowedPizzas = ['Pepperoni', 'Veggie', 'ChickenSuya'];

    const total = 0;
    
    for (const [key, value] of Object.entries(pizza)) {
        if (arrayOfAllowedPizzas.includes(key)) {
            total += value * pizzaPrices[key];
        }
    }
    return total;
}


module.exports = getPizzaTotal;