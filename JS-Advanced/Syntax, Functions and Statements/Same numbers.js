function solution(param) {
    let sameDigitsChecker = true;
    let sum = 0;
    if(typeof(param) != `string`){
        num = param.toString();
    }
    else {
        num = param;
    }
    for(i = 0; i < num.length; i++){
        if(num[0] != num[i]){
            sameDigitsChecker = false;
        }
        sum += parseInt(num[i]);
    }
    console.log(sameDigitsChecker);
    console.log(sum);
}
solution(2222222)