function multipleby5(num){
    return num;
}
multipleby5.abc = 4
console.log(multipleby5(5));
console.log(multipleby5.abc);
console.log(multipleby5.prototype);

// In JS everything is object even function can be execute as function or object 

function createUser(username,score){
    this.username = username
    this.score = score
}
createUser.prototype.increase = function(){
   this.score++; //now score value is incremented i.e. 31 and is in this.score
   let increment = this.score //here 31 is stored in increment  
    console.log(increment);
    
}

createUser.prototype.print = function(){
    console.log(`Username is ${this.username}`);
    console.log(`Score is ${this.score}`);
}
const user1 = new createUser("abcd", 30)
const user2 = new createUser("efgh", 20)

user1.increase()
