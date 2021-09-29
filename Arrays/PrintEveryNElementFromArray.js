function solution(arr, step) {
    const finalArr = [];
    for(let i = 0; i< arr.length; i+=step){
        finalArr.push(arr[i])
    }
    return finalArr
}

solution(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)