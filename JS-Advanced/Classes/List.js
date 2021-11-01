class List{
    constructor(){
        this.content = [];
        this.size = 0;
    }

    add(item){
        this.content.push(item);
        this.sort();
        this.size += 1;
        return this.content;
    }

    sort(){
        this.content.sort((a, b) => a - b);
    }

    remove(index){
        if(this.outOfBoundCheck){
        this.content.splice(index, 1)
        this.size -= 1;
        }
        return this.content;
    }

    get(index){
        if(this.outOfBoundCheck){
        return this.content[index];
        }
    }

    outOfBoundCheck(index) {
        if (index < 0 || index >= this.content.length) {
            return false;
        }
        return true;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log();
