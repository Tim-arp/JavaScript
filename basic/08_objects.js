let details = {
    name : "Pramit",
    "full name" : "Pramit Regmi",
    age : 21,
    email : "abcd@yahoo.com",
    location : "Nepal"
}
    // console.log(details.name);
    // console.log(details.email);

    details.name = "Timarp"
    details.age = 18
    Object.freeze(details)
    console.log(details.name);
    console.log(details.age);
    
    details.name = "Slim Shady"
    console.log(details.name);
    console.log(details.age);

    
    
// console.log(details["full name"]);  keys yedi "" garera deko xa bhani yo method use garna parxa
 



// symbol in object 

// let sym = Symbol("Mykey") this is how we create symbol

// let info = {
//     name : "Pramit",
//     age : 21,
//     // [sym] : "hello", this is how declare symbol inside object 
// }

// // console.log(info[sym]); this is how we print symbol 