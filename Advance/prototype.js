// creating new prototype 
 let heropower = {
    thor : "hammer",
    spiderman : "web",

    getspiderpower : function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}
heropower.getspiderpower()

Object.prototype.hero = function(){ //this just creates a prototype called hero in all objects
    console.log(`Superheroes have unique superpowers`);
}
heropower.hero()

myhero = ["Thor","Ironman","Spiderman"]
myhero.hero()



Array.prototype.power = function(){
    console.log(`Marvel >> DC`);   
}
myhero.power()


// Inheritance 
const user ={
    username : "Timarp",
    email : "abcd@gmail.com"
}

const teacher = { 
    makeVideo : true
}

const teachersupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS assignment",
    fulltime : true,
    __proto__ : teachersupport
}
teacher.__proto__ = user //here teacher inherits property of user

// modern syntax to inherit property 
Object.setPrototypeOf(teachersupport,teacher)

console.log(TAsupport.isAvailable);




// small task 
let name = "Timarp      "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);    
}
name.truelength()

"ggsfgttyts   ".truelength()