let details = {
    name : "Pramit",
    "full name" : "Pramit Regmi",
    age : 21,
    email : "abcd@yahoo.com",
    location : "Nepal"
}
// console.log(details.name);
// console.log(details.email);
// console.log(details["full name"]);  keys yedi "" garera deko xa bhani yo method use garna parxa

/*

            Freezing specific value in object

    details.name = "Timarp"
    details.age = 18
    console.log(details.name);
    // Object.freeze(details,'name') 
    // Object.freeze(details,'age')  this property helps to freeze specific object's value 

    details.name = "hehe"
    console.log(details.name);


    details.age = 546
    console.log(details.age);
    
  */  

    
    
 



// symbol in object 

// let sym = Symbol("Mykey") this is how we create symbol

// let info = {
//     name : "Pramit",
//     age : 21,
//     // [sym] : "hello", this is how declare symbol inside object 
// }

// // console.log(info[sym]); this is how we print symbol 


/*
                Function in object

details.greeting = function(){
    console.log("Hello User");
}
console.log(details.greeting());


details.greetingagain = function(){
    console.log(`Hello User ${this.name}`);
}
console.log(details.greetingagain());
*/

/*
        WE CAN CREATE OBJECT IN THIS WAY
const user = {}
user.name = "Pramit"
user.id = "45fd",
user.IsLoggedIn = false

console.log(user);
*/

/*
    NESTED OBJECT

const app = { 
    id : "54fd",
    email : "abcd@yahoo.com",
    lastactive : "5hours ago",
    fullname : {
        userfirstname : {
            FirstName : "Pramit",
            LastName : "Regmi",
        }
    }
}

console.log(app.fullname.userfirstname.FirstName);
*/

/*
    COMBINING TWO OBJECTS
const num1 = {
    1 : "a",
    2 : "b",
}
const num2 = {
    3 : "c",
    4 : "d",
}
const num3 = Object.assign({},num1,num2)
console.log(num3);

const num4 = {...num1 , ...num2}
console.log(num4);
*/

/*
    objects as an array
const user = [
    {
        id : "345ht",
        email : "ABC@gmail.com"
    },

    {
        id : "345ht",
        email : "DEF@gmail.com"
    },

    {
        id : "345ht",
        email : "GHI@gmail.com"
    },
]

console.log(user[1].email);
*/

/*
accessing all keys and values of an object (important)
console.log(details);
console.log(Object.keys(details));
console.log(Object.values(details));
console.log(Object.entries(details)); sab key and value lai array banaidinxa
*/

// console.log(details.hasOwnProperty('name'));  given Object ma property xa kinai bhanera check garna milxa
