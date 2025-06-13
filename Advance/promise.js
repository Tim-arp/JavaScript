const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Async task is completed")
    },1000)
})

promiseTwo.then(function(message){
    console.log("Promise Consumed");
    console.log(message);
    
})




// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2 is executed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 is completed");
// })


const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username : "Timarp", emali : "abc@gmail.com"})
},1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Pramit", password : "1234"})
        }
        else{
            reject("Error something went wrong")
        }
    },1000)
})

// promiseFour.then( (user)=>{
//     console.log(user.username);
// }).catch((error)=>{
//     console.log(error);
// })


// prefer this method cause it is chaining and is easy to understand 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally( ()=> console.log("Promise is either resolved or rejected"))