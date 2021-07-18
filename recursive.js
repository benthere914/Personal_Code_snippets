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

function findSmallestInArray(array, tempArray = [...array],smallest = tempArray[tempArray.length - 1], index = tempArray.length, counter = tempArray.length){
    debugger;
    if (!tempArray.length) return [smallest, index];
    else {
        counter--;
        let last = tempArray.pop();
        if (last <= smallest) {smallest = last; index = counter};
        return findSmallestInArray(array, tempArray, smallest, index, counter)
    }
}

// console.log(findSmallestInArray([45, 1000, 100]))


function findLargestInArray(array, tempArray = [...array],largest = tempArray[tempArray.length - 1], index = tempArray.length, counter = tempArray.length){
    if (!tempArray.length) return [largest, index];
    else {
        counter--;
        let last = tempArray.pop();
        if (last >= largest) {largest = last; index = counter};
        return findLargestInArray(array, tempArray, largest, index, counter)
    }
}

// console.log(findLargestInArray([45, 100, 10]))


