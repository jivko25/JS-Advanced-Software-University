function solution(arr) {
    const result = {};
    for(let i = 0; i < arr.length; i += 2){
        result[arr[i]] = parseInt(arr[i+1]);
    }
    console.log(result);
}

solution(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);