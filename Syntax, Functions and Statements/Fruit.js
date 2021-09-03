function solution(fruit, kilograms, price){
    let finalPrice = kilograms * price / 1000;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${(kilograms/1000).toFixed(2)} kilograms ${fruit}.`);
}

solution('orange', 2500, 1.82);