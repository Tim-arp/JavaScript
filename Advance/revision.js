// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise is Executed");
//         resolve("Hello")
//     },1000)
// })
// promiseOne.then(function(message){
//     console.log("Promise Consumed");
//     console.log(message);

// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Resolved 2"); 
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//      resolve("Promise 2")
//     },1000)
// }).then(function(message){
//     console.log("Resolved 2");
//     console.log(message);
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : "Timarp", email : "abcd@efgh.com"})
//     },1000)
// })

// promiseThree.then(function(message){
//     console.log(message);  
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: "Timarp", password: "123" })
//         }
//         else {
//             reject("Error something is wrong")
//         }
//     }, 1000)
// })
// promiseFour
//     .then(function (user) {
//         console.log(user);
//         return user.username
//     })
//     .then(function (username) {
//         console.log(username);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function(){
//         console.log("Promise is either resolved or rejected");
//     })


// console.log("1");
// console.log("2");
// console.log("3");

// new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("4");
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("5");
//     console.log("6");
//     console.log("7");
// })
// console.log("8");



// function getData(){
//     return new Promise ( (resolve,reject)=>{
//         setTimeout( ()=>{
//             resolve(400)
//         },5000)
//     } )
// }
// console.log("load modules");
// console.log("Do something");
// console.log("load data");
// let data = getData()

// data.then((v)=>{
    //     console.log(v);
    //     console.log("Process data");
    //     console.log("task 2");
    // })
    
    
    
//     function getData(){
//         return new Promise ((resolve,reject)=>{
//             setTimeout( ()=>{
//                 resolve(400)
//             },5000)
//         })
//     }
//     async function main() {
//         console.log("load modules");
//         console.log("Do something");
//         console.log("load data");
//         let data = await getData()
//         console.log(data);
//         console.log("Process data");
//         console.log("task 2");
// }
// main()




// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     return data  
// }
//  async function main() {
//         console.log("load modules");
//         console.log("Do something");
//         console.log("load data");
//         let data = await getData()
//         console.log(data);
//         console.log("Process data");
//         console.log("task 2");
// }
// main()




// (async function() {
//     const a = await new Promise(function(resolve,reject){
//          setTimeout(function(){
//            resolve("This is me async function")
//            console.log("1");
//         },5000)
//     })
//     console.log(a);
//     console.log("2");
//     console.log("3");
// })();

// (async () => {
//     const a =  await new Promise( (resolve,reject)=>{
//             setTimeout( ()=>{
//             resolve("This is async function")
//             console.log("1");
//         },5000 )
//     } )
// console.log(a);  
// console.log("2");
// console.log("3");
// })();


async function getData() {
  let response = await fetch('url');
  let data = await response.json();
  console.log(data);
}

getData();
console.log("This runs before the data is loaded");
