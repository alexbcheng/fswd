var names = ["alex","vena","andre","enzo"];

names.forEach(function(name) {
    console.log(name);
});

var input = prompt("What would you like to do?").toUpperCase();

while (input != "QUIT") {
    if (input === "LIST") {
        listToDo();
    } else if (input === "NEW" || input === "ADD") {
        addToDo();
    } else if (input === "DELETE") {
        deleteToDo();
    } else if (input === "REVERSE") {
        revserseList();
    }
    input = prompt("What would you like to do?").toUpperCase();
}

console.log("Ok you quit the app!");

var arr1 = [1,2,1,1,1];
console.log(isUniform(arr1));
var arr2 = ["a","a","a","a"];
console.log(isUniform(arr2));

function listToDo() {
    console.log("*************");
    names.forEach(function(name, i) {
        console.log(i + ": " + name);
    });
    console.log("*************");
}

function addToDo() {
    names.push(prompt("Enter new name"));
}

function deleteToDo() {
    var index = prompt("Enter index of name to delete");
    console.log(names[index] + " has been deleted.");
    names.splice(index, 1);
}

function revserseList() {
    console.log("*************");
    names.slice().reverse().forEach(function(name, i) {
        console.log(i + ": " + name);
    });
    console.log("*************");
}

function isUniform(str) {
    if (typeof str != "object") {
        return false;
    }
    var first = str[0];
    for (i = 1; i < str.length; i++) {
        if (str[i] !== first) {
            return false;
        }
    }
    return true;
}

function sumArray(numbers) {
    var total = 0;
    numbers.forEach(function(number) {
        total += number;
    });
    return total;
}

function max(numbers) {
    var max = numbers[0];
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
