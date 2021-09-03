function solution(input){
    let length = input[0].length + input[1].length + input[2].length;
    let average = Math.floor(length/3);

    console.log(length);
    console.log(average);
}

solution(['chocolate', 'ice cream', 'cake'])