// for of 
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
// const arr1 = [1,"Timarp",3,"fdfd",5]
// for (const num1 of arr1) {
//     console.log(num1);
// }

// const greeting = "Hello World"
// for (const greet of greeting) {
//     if(greet == " "){
//         break;
//     }
//     console.log(`Each char is ${greet} `);
// }

// const val = {
//     name : "Pramit",
//     age : 21,
//     address : "Butwal"
// }
// for (const info of val.address) {
//     console.log(info);

// const greeting = "Hello World";
// let result = "";

// for (const greet of greeting) {
//     if (greet === " ") { // Skip spaces
//         continue;
//     }
//     result = result + greet; // Add character to result
// }

// console.log(result);

/*
// MAPS --> it is an object which hold unique key value pair.

const map = new Map()
map.set('NEP',"NEPAL")
map.set('USA',"United States Of America")
map.set('ESP',"Spain")

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key,value);
}
*/

// you cannot directly iterate over objects using a for...of loop

// FOR IN 
// const myObj = {
//     game1 : "NFS",
//     game2 : "Spiderman"
// }

// for (const abcd in myObj) {
//     console.log(`${abcd} ${myObj[abcd]}`);
// }


// const arr = ["js","py","cpp","rb"]
// for (const key in arr) {
//     console.log(arr[key]);
// }

// array ma pani keys hunxa by default hunxa ra tesko value sadhai 0 bata start hunxa 


// maps aren't iteratable using for in loop 



// FOR EACH 

// const coding = ["js","python","cpp","java","ruby"]
// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        language : "JavaScript",
        filename : "js"
    },
    {
        language : "python",
        filename : "py"
    },
    {
        language : "Java",
        filename : "java"
    }
]
// myCoding.forEach((item) => {
//     console.log(item.filename);
    
// })

const result = myCoding.find((item) => item.language === "python");
console.log(result);
console.log(result.language);
