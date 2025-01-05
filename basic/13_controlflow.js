// 1. if (condition) {
    
//     }

// 2. if (condition) {} 
//     else {}


// 3. if (condition) {}
// else if(){}
// else{}


// 4. switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const day = "Sunday"

switch(day){
    case "Sunday":
        console.log("Sunday");
        break;
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;

    default:
        console.log("Noday");
        
}


// Falsy and Truthy values 
// Falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values -> "0", 'false', " ",[],{},function(){}


// ternary operator

// condition ? true : false 
// const TeaPrice = 100
// TeaPrice >= 80 ? console.log("More than 80") : console.log("less than 80");


// Nullish coalescing operator (??)
// returns right side value if left side value is null or undefined otherwise returns left side value

num = null ?? 3
num = null ?? undefined
console.log(num);



