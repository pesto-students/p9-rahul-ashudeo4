function Person(name) {
    this.name=name;
}

function Teacher(name,subject) {
    Person.call(this,name);
    this.subject=subject
}

Teacher.prototype.print = function() {
    console.log(`${this.name} is now teaching ${this.subject}`);
}

let me = new Teacher("me","life");
console.log(me);
me.print()



// class Person {
//     constructor(name){
//         this.name=name
//     }
// }

// class Teacher extends Person {
//     constructor(name,subject) {
//         super(name)
//         this.subject=subject
//     }

//     print() {
//     console.log(`${this.name} is now teaching ${this.subject}`);
//     }

// }

// let me = new Teacher("me","life");
// me.print()