function solution(input1, input2, input3){
    let length = input1.length + input2.length + input3.length;
    let average = Math.floor(length/3);

    console.log(length);
    console.log(average);
}

solution('chocolate', 'ice cream', 'cake')