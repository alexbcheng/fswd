
var str1 = 897;
console.log(capitalize(str1));
console.log(isEven(1));
console.log(isEven(-4));
console.log(isEven(5));
console.log(factorial(6));
console.log(kebabToSnake("this-is-me"));
console.log(kebabToSnake("there is no kebab here"));

function capitalize(str) {
    if (typeof str === "number") {
        return "Not a String!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function isEven(num) {
    return (num % 2 === 0);
}

function factorial(num) {
    var result = num;
    if (num === 0) return 1; 
    for (i=num-1; i>0; i--) {
        result *= i;
    }
    return result;
}

function kebabToSnake(text) {
    return text.replace(/-/g,"_");
}
