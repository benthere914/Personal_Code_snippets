//Ugly Binary to Pretty Binary
function binaryToPretty(uglyBinary, bitSize = 8, spaced) {
  uglyBinary = uglyBinary.split(" ").join("").split("");
  let output = [];
  while (uglyBinary.length % bitSize !== 0) {
    uglyBinary.unshift("0");
  }
  if (spaced) {
    while (uglyBinary.length) {
      let bits = uglyBinary.slice(0, bitSize);
      uglyBinary.splice(0, bitSize);
      output.push(bits.join(""));
      output.push(" ");
    }
    return output.join(" ");
  } else {
    return uglyBinary.join("");
  }
}

function hexToPretty(uglyHex, blockSize = 2, spaced = true) {
  uglyHex = uglyHex.split(" ").join("").split("");
  let prettyHex = [];
  let block;
  while (uglyHex.length) {
    if (uglyHex.length >= blockSize) {
      block = uglyHex.slice(0, blockSize).join("");
      uglyHex.splice(0, blockSize);
    } else {
      block = uglyHex.join("");
      uglyHex = [];
    }
    prettyHex.push(block);
    if (spaced && uglyHex.length) {
      prettyHex.push(" ");
    }
  }
  return prettyHex.join("");
}

//Hexadecimal to Decimal:
function hexToDec(hexStr) {
  hexStr = hexToPretty(hexStr, 2, false);
  let decStr = parseInt(hexStr, 16);
  return decStr;
}
// console.log(hexToDec("f"));
// console.log(hexToDec("1"))
// console.log(hexToDec("f90234fedc"))
// console.log(hexToDec("fdadsfasdfqdfzfg"))


//Hexadecimal to Binary
function hexToBin(hexStr) {
  hexStr = hexToPretty(hexStr, 2, false);
  let output = [];
  hexStr = hexStr.split("");
  while (hexStr.length) {
    let binary = parseInt(hexStr[0], 16).toString(2);
    hexStr.splice(0, 1);
    if (binary === '0'){binary = "0000"}
    output.push(binary);
  }
  return binaryToPretty(output.join(""), 4, true);
}
// console.log(hexToBin("f"));
// console.log(hexToBin("0"));
// console.log(hexToBin("0f90"));
// console.log(hexToBin("fdadsfasdfqdfzfg"));

//Hexadecimal to ASCII:
function hexToASCII(hexStr) {
  hexStr = hexToPretty(hexStr, 2, false);
  let output = [];
  let str = "";
  let hexArray = hexStr.split("");
  while (hexArray.length) {
    let first = hexArray[0];
    let second = hexArray[1];
    hexArray = hexArray.slice(2);
    str = first + second;
    let charCode = parseInt(str, 16);
    output.push(String.fromCharCode(charCode));
  }
  return output.join("");
}

// console.log(hexToASCII("68656c6c6f20776f726c64"))
// console.log(hexToASCII(" 6  8   6  5 6  c 6  c 6  f 2  0 7  7 6  f 7  2   6c   6  4"))
// console.log(hexToASCII("21 21"))
// console.log(hexToASCII(""))

//Decimal to Hexadecimal:
function decToHex(decimal) {
  decimal = parseInt(decimal, 10);
  hexidecimal = decimal.toString(16);
  return hexToPretty(hexidecimal, 2, true);
}
//Decimal to Binary:
function decToBin(decimal) {
    decimal = parseInt(decimal, 10)
  let binary = decimal.toString(2);
  return binaryToPretty(binary, 8, true);
}
//Decimal to Ascii
function decToAscii(decimal) {
  decimal = decimal.split(" ");
  let output = [];
  while (decimal.length) {
    let charCode = decimal.shift();
    let char = String.fromCharCode(charCode);
    output.push(char);
  }
  return output.join("");
}

//Binary to Hexadecimal
function binToHex(binary) {
  binary = binaryToPretty(binary, 8, false);
  let binaryFourBits = binary.split(" ");
  let outPut = [];
  while (binaryFourBits.length) {
    let fourBits = binaryFourBits.shift();
    let decimal = parseInt(fourBits, 2);
    let hex = decimal.toString(16);
    outPut.push(hex);
  }
  return hexToPretty(outPut.join(""), 2, true);
}
//Binary to Decimal
function binToDec(binaryBlob) {
  let binary = binaryToPretty(binaryBlob);
  let decimal = parseInt(binary, 2);
  return decimal;
}

//Binary to ASCII:
function binToASCII(binary) {
  binary = binaryToPretty(binary, 8, true);
  let output = [];
  let binaryArray = binary.split(" ");
  for (let i = 0; i < binaryArray.length; i++) {
    let charCode = parseInt(binaryArray[i], 2);
    let char = String.fromCharCode(charCode);
    output.push(char);
  }
  return output.join("");
}

//ASCII to Hexadecimal:
function ASCIIToHex(ASCIIStr) {
  let output = [];
  let str = ASCIIStr.split("");
  for (let i = 0; i < str.length; i++) {
    let charCode = ASCIIStr.charCodeAt(i);
    let hex = charCode.toString(16);
    output.push(hex);
  }
  return hexToPretty(output.join(""), 2, true);
}

//ASCII to Decimal:
function ASCIIToDec(ASCIIStr) {
  let output = [];
  let str = ASCIIStr.split("");
  for (let i = 0; i < str.length; i++) {
    let charCode = ASCIIStr.charCodeAt(i);
    let dec = charCode.toString(10);
    output.push(dec);
  }
  return output.join(" ");
}

//ASCII to Binary:
function ASCIIToBin(ASCIIStr) {
  let output = [];
  let str = ASCIIStr.split("");
  for (let i = 0; i < str.length; i++) {
    let charCode = ASCIIStr.charCodeAt(i);
    let binary = charCode.toString(2);
    output.push("0");
    output.push(binary);
  }
  return binaryToPretty(output.join(""), 8, true);
}
/********************************* */

// let arr = ["hex", "dec", "binary", "ascii"];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
