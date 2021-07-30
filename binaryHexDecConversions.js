//Hexadecimal to Decimal:
function hexToDec(hexStr) {
  let decStr = parseInt(hexStr, 16);
  return decStr;
}

//Hexadecimal to Binary
function hexToBin(hexStr) {
  let output = [];
  hexStr = hexStr.split("");
  console.log(hexStr);
  while (hexStr.length) {
    let binary = parseInt(hexStr[0], 16).toString(2);
    hexStr.splice(0, 1);
    output.push(binary);
  }
  return output.join("");
}

//Hexadecimal to ASCII:
function hexToASCII(hexStr) {
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

//Decimal to Hexadecimal:
function decToHex(decimal) {
  hexidecimal = decimal.toString(16);
  return hexidecimal;
}

//Decimal to Binary:
function decToBin(decimal) {
  let binary = decimal.toString(2);
  return binary;
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
  let binaryFourBits = binary.split(" ");
  let outPut = [];
  while (binaryFourBits.length) {
    let fourBits = binaryFourBits.shift();
    let decimal = parseInt(fourBits, 2);
    let hex = decimal.toString(16);
    outPut.push(hex);
  }
  return outPut.join("");
}

//Binary to Decimal
function binToDec(binaryBlob) {
  let decimal = parseInt(binaryBlob, 2);
  return decimal;
}

//Binary to ASCII:
function binToASCII(binaryBlob) {
  let output = [];
  let binaryArray = binaryBlob.split(" ");
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
  return output.join("");
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
  return output.join("");
}
/********************************* */

let arr = ["hex", "dec", "binary", "ascii"];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      console.log(arr[i], arr[j]);
    }
  }
}
