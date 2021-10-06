function solution(arr, rotates) {
    for(let i = 1; i <= rotates; i++){
    arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}

solution(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);