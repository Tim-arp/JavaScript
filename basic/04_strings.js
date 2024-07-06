// Strings can be denoted by both "" or ''

// const name = "Timarp"
// const age = 21
// console.log("My name is",  name + "and my age is", age); 
// we don't use this method because it is old method

// console.log(`MY name is ${name} and my age is ${age}`); 
// This is the new method and it is readable

const RealName = "Pramit"
// console.log(RealName.length); gives length of the string 
// console.log(RealName.toUpperCase()); converts string into uppercase
// console.log(RealName.toLowerCase()); converts string into lowercase
// console.log(RealName.charAt(3)); nth term ma kun character xa bhanera herna milxa
// console.log(RealName.indexOf('P')); certain character kun postion ma xa tyo thahunxa

// console.log(RealName.slice(0,4)); Character lai trim gardinxa(position 0 dekhi 3 samma ko character matra linxa)
// console.log(RealName.slice(-4,3)); 
// console.log(RealName.slice(2)); 2 position bata character lai trim garxa
// console.log(RealName.replace("Pramit" , "Timarp")); string lai replace gardinxa new string le

const GameName = "      Timarp     "
// console.log(GameName.trim()); removes the spaces in that character 
// console.log(GameName.trimStart());
// console.log(GameName.trimEnd());

// console.log(GameName.includes("Timarp")); checks wheather the given string is present or not 
// console.log(GameName.split("T")); It splits the string upon given character  

/*
const str1 = "Timarp"
const str2 = "Pramit"
console.log(str1.concat("Hello",str2));
it just adds the two strings
*/