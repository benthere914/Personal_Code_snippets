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
    //base case
    if (num === 1) return 1;
    //recursive call with recursive
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
// showFibonacci = (start, end = start + 1) => {for (let i = start; i <= end; i++){console.log(fibonacci(i))}};
// showFibonacci(0, 10);

function sumOfArray(array){
    //base case
    if (!array.length) return 0;
    //recursive step and recursive call
    return array.pop() + sumOfArray(array)
}

// console.log(sumOfArray([0,1,2,3,4,5,6,7,8,9,10])) // 55 

function findSmallestInArray(array, smallest = array[array.length - 1]){
    if (!array.length) return smallest;
    else {
        let last = array.pop();
        if (last < smallest) {smallest = last}
        return findSmallestInArray(array, smallest)
    }
}

// console.log(findSmallestInArray([45, 10, 100]))