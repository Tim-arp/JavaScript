let details = {
    name : "Pramit",
    "full name" : "Pramit Regmi",
    age : 21,
    email : "abcd@yahoo.com",
    location : "Nepal"
}
// console.log(details.name);
// console.log(details.email);
// console.log(details["email"]);
// console.log(details["full name"]);  keys yedi "" garera deko xa bhani yo method use garna parxa

/*

            FREEZING SPECIFIC VALUE IN OBJECT

    details.name = "Timarp"
    details.age = 18
    console.log(details.name);
    // Object.freeze(details,'name') 
    // Object.freeze(details,'age')  this property helps to freeze specific object's value 
    Object.freeze(details) this property freezes all the keys and values in a object
    details.name = "hehe"
    console.log(details.name);


    details.age = 546
    console.log(details.age);
    
  */  

//             SYMBOL IN OBJECT 

// const mykey = Symbol("Key1") This is how we create symbol

// let detail = {
//     name : "Pramit",
//     age : 21,
//     address : "Magarmudha",
//     "Full Name" : "Pramit Regmi",
//     [mykey] : "key1"   symbol declaration inside object
// }
                                                                                                    // Output
// console.log(detail.name)                                                                            Pramit
// console.log(detail["Full Name"])                                                                    Pramit Regmi
// console.log(detail[mykey])  prints the value in [mykey]                                             key1
// console.log(typeof (detail[mykey])) while doing this it prints datatype as string                   string
// console.log(typeof mykey) while doing this it prints datatype as symbol                             symbol

/*
            FUNCTION IN OBJECT

details.greeting = function(){
    console.log("Hello User");
}
console.log(details.greeting());


details.greetingagain = function(){
    console.log(`Hello User ${this.name}`); same object ko value lai refer garna xa bhani this. use garni 
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
    OBJECTS AS AN ARRAY
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


//                                  DESTRUCTING OF OBJECT

const course = {
    CourseName : "JS series",
    Price : "free",
    CourseInstructor : "Noone"
}
console.log(course);

// const {CourseInstructor} = course  course object bata {} ma bhako keys ko value dinxa
// console.log(CourseInstructor);

// const {CourseInstructor : Instructor} = course; its kinda like renaming 
// console.log(Instructor);
