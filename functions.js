
var str1 = 897;
console.log(capitalize(str1));

function capitalize(str) {
    if (typeof str === "number") {
        return "Not a String!"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
