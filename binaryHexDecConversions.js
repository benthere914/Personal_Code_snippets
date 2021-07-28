function hexToDec1Character(input){
    if(!input){return null}
    input = input.toLowerCase()
    switch (input){
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



function hexToDecMultiCharacter(hex){

    let output = 0;
    let start = 0;
    for (let i = hex.length - 1; i > -1; i--){
        let ele = ((16 ** start) * hexToDec1Character(hex[i]));
        output += ele
        start++;
    }
    return output;
}

function fourDigitBinaryToHex(input){
    if(!input){return null}
    input = input.toLowerCase()
    switch (input){
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
            return 10;
        case "1011": 
            return 11;
        case "1100": 
            return 12;
        case "1101":
            return 13;
        case "1110":
            return 14;
        case "1111":
            return 15;
    }
    return null;
}



function binaryToDec(input){
    let output = 0;
    let start = 0;
    for (let i = input.length - 1; i > -1; i--){
        let ele = ((2 ** start) * input[i]);
        output += ele
        start++;
    }
    return output;


}

// console.log(binaryToDec("11111111"))