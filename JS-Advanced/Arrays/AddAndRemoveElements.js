function solution(arr) {
    const solution = [];
    for(let i = 0; i < arr.length; i++){
        switch (arr[i]) {
            case "add":
                solution.push(i+1)
                break;
            case "remove":
                solution.pop()
                break;
            default:
                break;
        }
    }
    if(solution.length != 0){
    solution.forEach(element => {
        console.log(element);
    });
    }
    else{
        console.log("Empty");
    }
}

solution(['add', 
'add', 
'remove', 
'add', 
'add']
)