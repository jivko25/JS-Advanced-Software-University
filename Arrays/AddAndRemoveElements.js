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
    print(solution)
}

function print(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

solution(['add', 
'add', 
'remove', 
'add', 
'add']
)