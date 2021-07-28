function hexToDec(hex){
    if(!hex){return null}
    hex = hex.toLowerCase()
    switch (hex){
        case "0":
            return 0;
        case "1": 
            return 1;
        case "2": 
            return 2;
        case "3":
            return 3;
        case "4":
            return 4;
        case "5":
            return 5;
        case "6":
            return 6;
        case "7": 
            return 7;
        case "8": 
            return 8;
        case "9":
            return 9;
        case "a":
            return 10;
        case "b": 
            return 11;
        case "c": 
            return 12;
        case "d":
            return 13;
        case "e":
            return 14;
        case "f":
            return 15;
    }
    return null;
}

function hexToDecMulti(hex){
    let output = 0;
    let start = 0;
    for (let i = hex.length - 1; i > -1; i--){
        let ele = ((16 ** start) * hexToDec(hex[i]));
        output += ele
        start++;
    }
    return output;
}

function binaryToHex(binary){
    if(!binary){return null}
    binary = binary.toLowerCase()
    switch (binary){
        case "0000":
            return 0;
        case "0001": 
            return 1;
        case "0010": 
            return 2;
        case "0011":
            return 3;
        case "0100":
            return 4;
        case "0101":
            return 5;
        case "0110":
            return 6;
        case "0111": 
            return 7;
        case "1000": 
            return 8;
        case "1001":
            return 9;
        case "1010":
            return "a";
        case "1011": 
            return "b";
        case "1100": 
            return "c";
        case "1101":
            return "d";
        case "1110":
            return "e";
        case "1111":
            return "f";
    }
    return null;
}

function BinaryToHexMulti(binary){
    let resArr = [];
    binary = binary.split(" ").join("")
    if (!(binary.length % 4 === 0)){
        console.log("Binary length not vaid must be in groups of 4");
        return null
    }
    for (let i = 0; i < binary.length; i += 4){
        let digit1 = binary[i];
        let digit2 = binary[i + 1];
        let digit3 = binary[i + 2];
        let digit4 = binary[i + 3];
        let fourDigits = [...digit1, ...digit2, ...digit3, ...digit4].join("")
        resArr.push(binaryToHex(fourDigits))
    }
    return resArr.join("")
}

function binaryToDec(binary){
    let output = 0;
    let start = 0;
    for (let i = binary.length - 1; i > -1; i--){
        let ele = ((2 ** start) * binary[i]);
        output += ele
        start++;
    }
    return output;
}
let arr = ["hex", "dec", "binary", "ascii"]
for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if (i !== j){
            console.log(arr[i], arr[j])
        }
    }
}