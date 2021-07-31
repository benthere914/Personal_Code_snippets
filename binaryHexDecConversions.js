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
// console.log(binaryToPretty("0 0 0110101 1101 101 101 1", 4, true))
// console.log(binaryToPretty("00011010111011011011", 8, true))
// console.log(binaryToPretty("00011010111011011011"))
// console.log(binaryToPretty("0"))
// console.log(binaryToPretty("01", 5))

//Ugly Hexadecimal to pretty Hexadecimal
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
// console.log(hexToPretty("adfec3467", 4, true));
// console.log(hexToPretty("adfec34675f", 8, true));
// console.log(hexToPretty("adfec346", 8, true));
// console.log(hexToPretty("0  e234567389    f ", 3));
// console.log(hexToPretty(" 0  f f ", 1, true));


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
// console.log(decToHex("5"));
// console.log(decToHex("5050"));
// console.log(decToHex("5g"));
// console.log(decToHex("5g5"));
// console.log(decToHex(""));

//Decimal to Binary:
function decToBin(decimal) {
  decimal = parseInt(decimal, 10)
  let binary = decimal.toString(2);
  return binaryToPretty(binary, 8, true);
}
// console.log(decToBin("5"));
// console.log(decToBin("5050"));
// console.log(decToBin("5g"));
// console.log(decToBin("50"));
// console.log(decToBin(""));

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
// console.log(decToAscii("77"));
// console.log(decToAscii("50 32 50"));
// console.log(decToAscii("5425"));
// console.log(decToAscii("52"));
// console.log(decToAscii("25"));

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
// console.log(binToHex("01010"));
// console.log(binToHex("10"));
// console.log(binToHex("101 01 01 0"));
// console.log(binToHex("1010 0101"));
// console.log(binToHex(""));

//Binary to Decimal
function binToDec(binaryBlob) {
  let binary = binaryToPretty(binaryBlob);
  let decimal = parseInt(binary, 2);
  return decimal;
}
// console.log(binToDec("01010"));
// console.log(binToDec("10"));
// console.log(binToDec("101 01 01 0"));
// console.log(binToDec("1010 0101"));
// console.log(binToDec(""));

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
// console.log(binToASCII("01101 000 01100 101 0110 1100 0110 1100 0110 1111 0010 0000 01110 111 0110 1111 0111 0010 01101100 01100100"));
// console.log(binToASCII("0 1 0 1 0 0 1 0"));
// console.log(binToASCII("11 01 01 0"));
// console.log(binToASCII("1000001"));
// console.log(binToASCII(""));

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
// console.log(ASCIIToHex("hello world!"));
// console.log(ASCIIToHex("1010101"));
// console.log(ASCIIToHex("       "));
// console.log(ASCIIToHex("#$%^&*()"));
// console.log(ASCIIToHex(""));


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
// console.log(ASCIIToDec("hello world!"));
// console.log(ASCIIToDec("1010101"));
// console.log(ASCIIToDec("       "));
// console.log(ASCIIToDec("#$%^&*()"));
// console.log(ASCIIToDec(""));

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
// console.log(ASCIIToBin("hello world!"));
// console.log(ASCIIToBin("1010101"));
// console.log(ASCIIToBin("       "));
// console.log(ASCIIToBin("#$%^&*()"));
// console.log(ASCIIToBin(""));
