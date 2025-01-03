// IIFE -> function lai immediately call garni (to avoid global scope pollution)
/*
(function name(){
    console.log("Hello");
})();
*/
// ()() -> 1st () acts as function defination and 2nd () acts as function call 
// after function call we need to end function with ; in IIFE 


(() => {
    console.log("Hello World");
})();

((name) => {
    console.log(`Wassup ${name} `);
    
})("Pramit");