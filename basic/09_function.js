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


// function login(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(login("Timarp"));
// console.log(login());


/*
function TotalPrice(...num1){
    return num1;
}
console.log(TotalPrice(200,454,121));

rest/spread operator use garna parxa(...)
yo use garepar eutai parameter le jati ota pani element linxa as a array ko form ma 
*/



                // FUNCTIONS WITH OBJECTS
/*

const user = {
    username : "Timarp",
    id : 455
}

function HandleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}` );
}
HandleObject(user);
*/

/*
function HandleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}` );
}
HandleObject({
    username : "Pramit",
    id : 432
})
*/

            // FUNCTION WITH ARRAY 

const MyNewArray = [322,656,23,6,11]

function returnvalue(getarray){
    return getarray[2];
} 
// console.log(returnvalue(MyNewArray));
console.log(returnvalue([232,5454,323,6767,344]));