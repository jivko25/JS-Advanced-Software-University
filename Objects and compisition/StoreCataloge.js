function solution(input) {
    const result = {};
    input.forEach(element => {
        const [product, price] = element.split(" : ");
        if(!result[product.charAt(0)]){
            result[product.charAt(0)] = [];
            const item = {};
            item.name = product;
            item.price = price;
            result[product.charAt(0)].push(item);
        }
        else{
            const item = {};
            item.name = product;
            item.price = price;
            // item[product] = Number(price);
            result[product.charAt(0)].push(item);
        }
    })
    const sortedResult = Object.keys(result).sort((a, b) => a.localeCompare(b));
    sortedResult.forEach(el => {
        console.log(el);
        const sortedItem = Object.keys(result[el]).sort((a, b) => a.name.localeCompare(b.name));
        sortedItem.forEach(ele => {
            result[el][ele].forEach(element => {
                console.log(`${element.name} - ${element.price}`);
            })
        })
        // result[el].forEach(element => {
        //     console.log(`${element.name} - ${element.price}`);
        // })
    })
    // for(item in result){
    //     console.log(item);
    //     result[item].forEach(element => {
    //         console.log(`${element.name} - ${element.price}`);
    //     })
    // }
    console.log();
}

solution(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);