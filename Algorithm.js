const readline = require("readline");

// Create interface to read from and write to the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt the user for input
function getInput() {
    rl.question("Enter 5 integers, seperate by spaces: ", (input) => {
        const array = input.split(" ");
        const integersArray = array.map((str) => parseInt(str.trim(), 10));
        if (checkInt(integersArray)) {
            checkLength(integersArray);
        } else {
            getInput();
        }
    });
}
// Check if there any not-integer
function checkInt(arr) {
    for (i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log(
                "Your input contains element(s) that are not integer. Try again!"
            );
            return false;
        }
    }
    return true;
}
//Check the length of input
function checkLength(arr) {
    if (arr.length > 5) {
        console.log(
            "Your input is more than 5 integers, we take first 5 integers"
        );
        miniMaxSum(arr.slice(0, 5));
        rl.close();
    } else if (arr.length < 5) {
        console.log("Your input is less than 5 integers. Try again!");
        getInput();
    } else {
        miniMaxSum(arr);
        rl.close();
    }
}
//main calculating function
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    var minSum = arr.slice(0, 4).reduce(function (sum, num) {
        return sum + num;
    }, 0);
    var maxSum = arr.slice(1).reduce(function (sum, num) {
        return sum + num;
    }, 0);
    console.log("".concat(minSum, " ").concat(maxSum));
}

getInput();

// ============= Bonus function ==============
//Count total of array
function totalSum(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum;
}
//Find min in array
function findMin(arr) {
    if (arr.length == 0) {
        return undefined; // Return undefined for an empty array
    }
    return Math.min(arr);
}
//Find max in array
function findMax(arr) {
    if (arr.length == 0) {
        return undefined; // Return undefined for an empty array
    }
    return Math.max(arr);
}
//Find even elements in array
function findEvenElements(arr) {
    // Using the filter method to find even elements
    const evenElements = arr.filter((num) => num % 2 == 0);
    return evenElements;
}
//Find odd elements in array
function findOddElements(arr) {
    // Using the filter method to find even elements
    const oddElements = arr.filter((num) => num % 2 != 0);
    return oddElements;
}
