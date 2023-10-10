//let keyword
let x = 1;
if (true) {
    let x = 2;
    console.log(x);
}
console.log(x);

//const keyword
const Pi = 3.14;
console.log("const keyword:", Pi);

//arrow function
const add = (a1, a2) => a1 + a2;
console.log("arrow function for sum:", add(5, 3))

//spread(...) operater
const arr = [1, 2, 3];
const copyArr = [...arr];

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("sum using spread operater:", sum(1, 2, 3));

//for-of loop
const arr2 = [1, 2, 3];
for (const num of arr2) {
    console.log(num);
}

//Map
const m = new Map();
m.set("name", "nishar");
m.set("age", 19);
console.log("Map:", m.get("name"));

//set
const s = new Set();
s.add(1);
s.add(2);
s.add(1);
console.log("set:", s);


//classes
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get detail() {
        console.log(`my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const nishar = new person("nishar", 19);
nishar.detail;


//promises
function fetchData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const data = "my name is nishar";
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));


//Symbol
const sym = Symbol("mySymbol");
const obj = {
    [sym]: "Symbol value",
};
console.log(obj[sym]);


//Default perameter
function defaultperam(collegename = "charusat university") {
    console.log(`My collegeName is(default peram):  ${collegename}`);
}

defaultperam();


//Function Rest Parameter
function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
}

console.log("Function Rest Parameter:", sum(2,3,4,5));


