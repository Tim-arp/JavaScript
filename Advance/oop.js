// Objects 
// collection of properties and methods

/*
let user = {
    username : "Timarp",
    loginCount : 3,
    signedIn : true,

    getUserdetail : function(){
        console.log("Got details from database");
        console.log(`Username : ${this.username}`);
    }
}
console.log(user.username);
console.log(user.getUserdetail());


function sayName() {
  console.log(this.name);
}

const person1 = { name: "Alice", sayName: sayName };
const person2 = { name: "Bob", sayName: sayName };

person1.sayName(); 
person2.sayName(); 
*/

function user(username,loginCount,isLoggedin){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedin = isLoggedin
    return this
}
let userOne = new user("Timarp",12,true)
let userTwo = new user("Timarp",2,false)
console.log(userOne);
