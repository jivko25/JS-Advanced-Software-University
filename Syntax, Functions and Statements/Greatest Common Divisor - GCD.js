function solution(num1, num2){
    let max = 1;
    for(i = 1; i <= num1 && i <= num2; i++){
        if(num1%i == 0 && num2%i == 0){
            max = i;
        }
    }
    console.log(max);
}
solution(2154, 458);