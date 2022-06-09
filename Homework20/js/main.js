/* function newFunction () {}

let newFunction = function() {}

let newFunction = () => {} */





function counter (...nums) {
    return nums.length;
}
console.log(counter(1,2,3,6,12,15));



function checkNums(a, b) {
    if (a < b) {
        return - 1;
    } 
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(checkNums(10,10));





function factorial (x) {
    let result = 1;
    for (let i = x; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(10));



function addString (num1, num2, num3) {
    let result;
    result = "" + num1 + num2 + num3;
    return result;
}
console.log(addString(3,2,2));




function rectangeArea (a, b) {
    let area = 0;
    area = a * b;
    if (b == undefined) {
       area = a * 4;
    }
    return area;
}
console.log(rectangeArea(4, 6));
console.log(rectangeArea(4));



function perfectNum (num) {
    let sum = 0;
    for ( let i = 0; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        return true;
    }
    else {
        return false;
    }
}
console.log(perfectNum(500));




function perfectNumRange (min, max) {
    for (let i = min; i <= max; i++) {
        if (perfectNum(i)) {
            console.log(i);   
        }
    }
}
console.log(perfectNumRange(1, 500));

