let person ={
    firstName:'Nishar',
    lastName:'Khorajiya',
    age:41,
    hobbies:['reading','gaming','tracking'],
    greet:function(){
        console.log(`Hello, my name is ${this.firstName}${this.lastName}.I'm ${this.age} year old.`);
    },
    adress:{
        city:'wankaner'
    }
}

// console.log(person.firstName);
// console.log(person['lastName'])

// person.age=40;
// person['hobbies'].push('coding');
// console.log(person)

const cloneObj=person
//console.log(cloneObj)
//const cloneOBJ2={adress: {...person.adress}}

cloneObj.firstName='vismit'
console.log(cloneObj)
console.log(person.firstName)