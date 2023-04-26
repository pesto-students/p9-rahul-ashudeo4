function hasDuplicate(data){
    return new Set(data).size !== data.length;
}

console.log(hasDuplicate([1, 2, 3, 5]));


function anotherApproach(data){
    const set = new Set();
    for(let char of data){
        if(set.has(char)){
            return true;
        }
        set.add(char)
    }
    return false
}

console.log(anotherApproach([1,2,1]));