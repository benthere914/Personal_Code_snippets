function recursiveIncludes(subString, string, subStringArray = subString.split(""), stringArray = string.split("")) {
    //base case 1
    if ((subStringArray.length === stringArray.length) && (subString !== string)) return false;
    //base case 2
    if (subString.length > string.length) return false;
    //base case 3
    if (subStringArray.reduce((bool, ele, i) => { if (ele !== stringArray[i]) { bool = false } return bool; }, true)) return true;
    //recursive case
    else {
        //recursive step
        stringArray.shift();
        //recursive call
        return recursiveIncludes(subString, string, subStringArray, stringArray);
    }
}
// console.log(recursiveIncludes("hello", "hllo world"))

function recursiveFactorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4))

function fibonacci(num, res = [0, 1], counter = 2){
    //defensive case 1
    if (num < 0) return null;
    //defensive case 2
    if (num === 0 || num === 1) return num;
    //base case
    if ((counter - 1) === num) return res.pop();
    //recursive case
    else {
        //adds the next element to res
        res.push(res[counter - 1] + res[counter - 2])
        //recursive step
        counter++
        //recursive call
        return fibonacci(num, res, counter)
    }
}
console.log(fibonacci(-1)) //null
// console.log(fibonacci(0)) //0
// console.log(fibonacci(1)) //1
// console.log(fibonacci(2)) //1
// console.log(fibonacci(3)) //2
// console.log(fibonacci(4)) //3
// console.log(fibonacci(5)) //5
// console.log(fibonacci(6)) //8
// console.log(fibonacci(7)) //13
// console.log(fibonacci(8)) //21
// console.log(fibonacci(9)) //34
// console.log(fibonacci(10)) //55