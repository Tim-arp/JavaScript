// function namee(){
//     console.log("P");
//     console.log("r");
//     console.log("a");
//     console.log("m");
//     console.log("i");
//     console.log("t");
// }
// namee()

// function add(num1,num2){
//    console.log(num1 + num2);
// }
// add(3,6)

// function addTwoNumbers(num1 , num2){
//     let result = num1 + num2;
//     return result
// }
// const result = addTwoNumbers(9,4)
// console.log("Result is", result);

// function addTwoNumbers(num1 , num2){
//     return num1 + num2;
// }
// let result = addTwoNumbers(9,3);
// console.log("Result is:",result);



// function login(username){
//     return `${username} just logged in`
// }
// console.log(login("Timarp"));


function login(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(login("Timarp"));
// console.log(login());