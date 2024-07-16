// Array ma counting 0 bata suru hunxa
// Array are mutable(kei operation garera change garriyo bhani real array change hunna)
// const arr = [23,12,54,21]
// console.log(arr);
// const arr1 = new Array(12,67,23,2) we can also define array in this way
// console.log(arr1[2]); array ko position 2 ma kun element xa print garxa

// const myarray = [23,67,26,89,233]
// myarray.push(86) array ko last ma 86 add hunxa
// console.log(myarray); 
// console.log(myarray.push(90)); yesari use garda latest array ko index dinxa
// myarray.pop() pop out the last element of the array 
// myarray.unshift(12) array ko start ma element add hunxa
// myarray.shift() array ko first bata element remove garxa
// console.log(myarray.includes(5)); array ma tyo element xa kinai bhanera show garxa
// console.log(myarray.indexOf(67)); element ko positon dinxa


// const newarray = myarray.join(); newarray ma myarray ko value janxa tara string datatype bhayera
// console.log(newarray)
// console.log(myarray.toString()); given array lai string ma change handinxa


// const newarr1 = myarray.slice(1,4) slice le given interval ma bhako array ko element lai print garxa except last element 
// console.log(newarr1); 

// const newarr2 = myarray.splice(1,4) splice ma given interval ko element haru remove hunxa array bata
// console.log(newarr2);
// const fd = [1,2,3,4,5,6,7]
// fd.splice(1,4)
// console.log(fd);


// const marvel_heros = ["Spiderman", "Ironman", "Thor"]
// const dc_heros = ["Batman", "Flash", "Superman"]
/*
marvel_heros.push(dc_heros)
console.log(marvel_heros);

Output  ---->   [ 'Spiderman', 'Ironman', 'Thor', [ 'Batman', 'Flash', 'Superman' ] ]

yesari duita array lai add garna khojda array ko bhitra aarko array banxa 
mathi ko result ma 4 ota matra element xa
['Batman','Flash','Superman'] yo euta element banxa
mathi ko array ma "flash" lai indicate garna paryo bhani marvel_heros[3][1] garera garna parxa
*/

/*
const heros = marvel_heros.concat(dc_heros)
console.log(heros);
Output ----> [ 'Spiderman', 'Ironman', 'Thor', 'Batman', 'Flash', 'Superman' ]
concat garera array lai add garda mathi ko jasto result aauxa which is good 
*/

// const new_heros = [...marvel_heros, ...dc_heros]
// console.log(new_heros);
// Same as concat kaam garxa (...) lai spread bhanxa

// const hyaa = [2,3,4,[4,5,78],234,87,[545,654,[21,56]]]
// const abc = hyaa.flat(Infinity)  
// array ko kati depth samma jani ho tei aanusar le value halna parxa
// yeshle mathi ko array lai eutai ramro array banayera dinxa
//  [2,   3,  4,   4,   5,  78, 234, 87, 545, 654,   21,  56]

// const abc = hyaa.flat(1) 
// [ 2, 3, 4, 4, 5, 78, 234, 87, 545, 654, [ 21, 56 ] ]

// const abc = hyaa.flat(2) 
//  [2,   3,  4,   4,   5,  78, 234, 87, 545, 654,   21,  56]
// console.log(abc);


// console.log(Array.isArray("Timarp"));  given element array ho kinai bhanera result dinxa 
// console.log(Array.from("Timarp"));  given element lai array ma change gardinxa

// let a = 100
// let b = 200
// let c = 300
// // console.log(Array.of(a,b,c)); mathi ko element lai array ma convert gardinxa
