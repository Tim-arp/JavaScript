const balance = new Number(100)
// console.log(balance);
// yeshma k hunxa bhanda kheri define garinxa kun datatype ho bhanera

// console.log(balance.toString());
// changes datatype into string

// console.log(balance.toFixed(2));
// decimal pachi duita digit linxa

// const anotherNumber = 123.546
// console.log(anotherNumber.toPrecision(5));
// given term samma value display garxa samma roundup garera 

// const number = 10000000
// console.log(number.toLocaleString());
// console.log(number.toLocaleString('en-IN'));
// comma le seperate garera value dinxa 



// ______________________________MATH___________________________________


// const abc = -132
// console.log(Math.abs(-4));
// console.log(Math.abs(abc));
// negative lai postive ma change gardinxa

// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// roundup garxa value lai 

// console.log(Math.min(1,34,12,67,-4));
// console.log(Math.max(1,34,12,67,-4));
// given array ma minimum ra maximum value find gardinxa

// console.log(Math.random());
// random value dinxa 0-1 ko range ma
// console.log(Math.random()*5);

const min = 20
const max = 40
console.log(Math.floor(Math.random()*(max - min + 1))+min);