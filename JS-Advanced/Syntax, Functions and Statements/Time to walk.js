function solution(numberOfSteps, step, speed) {
    let distance = numberOfSteps * step / 1000;
    let timeInHours = distance / speed;
    console.log(Math.floor(timeInHours)>10?``:`0` + `${Math.floor(timeInHours)}:${Math.floor(timeInHours*60 + Math.floor(distance/0.5))}:${Math.round(timeInHours*3600%60)}`);
}
solution(4000, 0.60, 5)