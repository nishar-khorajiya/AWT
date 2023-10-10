a = [1, 2, "3", 4, "5", 6];
console.log("ap1 = ", a);

console.log("size of ap1 is = ", a.length);

console.log("ap1[1] = ", a[1]);
console.log("ap1[4] = ", a[4]);

a.push(10);
console.log("ap1 after push() ", a);

a.pop();
console.log("ap1 after pop()", a);

// concate
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log("a1 = ", a1);
console.log("a2 = ", a2);
console.log("concate ap1ay a3 = ", a3);

// flat
const a4 = [0, 1, 2, [3, 4]];
console.log(a4.flat());

const a5 = [0, 1, 2, [[[3, 4]]]];
console.log(a5.flat(2));

// slice
console.log("slice");
const a6 = [1, 2, "3", 4.67, 5, 0.896, "one", 8, "tata"];
console.log(a);
console.log(a6.slice(1, 4));


// splice
console.log("splice");
const a9 = [0, 3, "darsh", 9.08];
a9.splice("splice => ", 0, "one");
console.log(a9);

// unshift
console.log("unshift")
const p1 = ["Banana", "Orange", "Apple", "Mango"];
p1.unshift("Lemon");
console.log("p1 = ", p1);

//shift
console.log("shift")
console.log(p1.shift())


// join

console.log("join");
const ele = ["1", "2", "3", "4", "5"];
console.log(ele.join(", "));

// delete
console.log("delete");
let a7=[1,2,3,4,5]
console.log("before:",a7)
delete a7[2]
console.log("after:",a7)

// object
console.log("object");
let data = {
  name: "nishar",
  age: 19,
  gender: "Male",
};

function detail(item) {
  console.log(item.name);
  console.log(item.age);
  console.log(item.gender);
}

detail(data);