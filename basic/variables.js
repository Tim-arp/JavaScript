const id = 15745
let email = "abcd@google.com"
var password = "abcd123"
location = "Nepal"
let state
// if we dont give any value then its default value is undefined

/* id = 233
console.log("id");
value of id doesnot change because it is constant(i.e. 15745) 
*/

console.table([id,email,password,location,state])
// here console.table prints all the information in a tabular form.

// console.log(typeof id, typeof email, typeof password, typeof location,typeof state);

/* let is blocked scoped datatype it will execute in its own block
let z = 5;
console.log(z);

{
    let z = 45;
    console.log(z);
}

output : 5 and 45

let z = 5;
{
    let z = 45;
    console.log(z);
}
console.log(z);

output : 45 and 5
*/

/*
var is a global scoped datatype it will give value to all the variable
var z1 = 5;
{
    var z1 = 45;
    console.log(z1);
}
console.log(z1);
// output : 45 45

var z1 = 5;
console.log(z1);
{
    var z1 = 45;
    console.log(z1);
}
output : 5 and 45
*/


// we dont use var mostly because of issue in block scope and functional scope