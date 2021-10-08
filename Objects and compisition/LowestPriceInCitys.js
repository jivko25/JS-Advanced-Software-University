function solution(input) {
    const result = {};
    input.forEach(element => {
        const [city, name, price] = element.split(" | ");
        const product = {};
        product.name = name;
        product.city = city;
        product.price = Number(price);
        if(!result[name]){
            result[name] = product;
        }
        else{
        if(result[name].price > product.price){
            result[name] = product
        }
    }
    });
    for(const city in result){
        console.log(`${result[city].name} -> ${result[city].price} (${result[city].city}) `);
    }
}

solution(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)