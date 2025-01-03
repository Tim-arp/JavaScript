/*
const user = {
    name : "Pramit",
    age : 21,

    fun : function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
    }
}
user.fun();
user.name = "Timarp"
user.fun();

console.log(this);
*/

/*
const sum = (num1,num2) =>{
    return num1 + num2;
}
console.log(sum(3,4));
*/
/*
const add = (num1,num2) => (num1+num2)
console.log(add(5,4));
*/
/*
const obj = (num1,num2) => ({name : "Timarp"})
console.log(obj(3,4))
*/
/*
const obj2 = (num1,num2) => {
    return {
        sum : num1 + num2,
        name : "Timarp"
    }
}
console.log(obj2(3,4));
const result = obj2(3,4)
console.log(result.sum ,result.name);
*/

const user = (name,age) => {
    console.log(`Hello ${name}. How are you? Are you ${age} years old?`);
}
user("Pramit",21)