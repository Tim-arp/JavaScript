// const coding = ["js","cpp","java","py"]
// coding.forEach( (item) => {
//     console.log(item);
    
// })
// for each loop cannot return value 

// const num = [1,2,3,4,5,6,7,8,9,10]

// const number = num.filter( (item) => item > 4)
// console.log(number);


// const newnums = []
// num.forEach( (item) => {
//     if(item > 4){
//         return newnums.push(item)
//     }
// } )
// console.log(newnums);



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const myBooks = books.filter( (bk) => bk.genre ==="Science" && bk.publish > 2009)
//   console.log(myBooks);
   
// const Boooooks = books.filter( (item) => item.publish > 2000 )
// console.log(Boooooks);


// const num = [1,2,3,4,5,6,7,8,9,10]
// const newnums = num.map( (item) => {return item + 10} )
// console.log(newnums);


// const newnums = num.map( (item) => (item * 10) ).map((item) => item + 1).filter( (item) => item>40 )
// console.log(newnums);


// REDUCE 

// const nums = [1,2,3,4,5]
// const myTotal = nums.reduce(function (acc,curval) {
//     console.log(`Value of acc is ${acc} and curval is ${curval}`);
    
//     return acc + curval
// },0)
// console.log(myTotal);

// const myTotal = nums.reduce( (acc,curval) => acc + curval,0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPrice = shoppingCart.reduce( (acc,item) => (acc +item.price),0 )
console.log(TotalPrice);
