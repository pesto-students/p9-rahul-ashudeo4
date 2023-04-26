const fibonacci = {
    a:0,
    b:1,
    c:null,
    idx:0,
    [Symbol.iterator]() {
        return this
    },
    
    next() {

        if (this.idx==0){
            this.idx++;
            return { value:this.a,done: false}
        }
        if (this.idx==1){
            this.idx++;
            return { value:this.b,done: false}
        }

        this.c=this.a+this.b;
        this.a=this.b;
        this.b=this.c
        return {value:this.c, done: this.c >10}
    }

}

for (let el of fibonacci) {
    console.log(el);
}