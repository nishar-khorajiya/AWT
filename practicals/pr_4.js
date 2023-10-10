function factorial(num) {
    function Fact(n) {
        if (n === 0 || n == 1) {
            return 1;
        } else {
            return n * Fact(n - 1);
        }
    }

    return Fact(num);
}

let globalVar = "global var";
function main4() {
    let localVar = "local var";
    console.log("global variable:", globalVar);
    console.log("local variable:", localVar);

    let num = 5;
    let result = factorial(num);
    console.log(`Factorial of ${num} is `, result);
}

main4();