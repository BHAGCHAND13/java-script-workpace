const languag = ['java','java-script','cpp','python'];
let add = languag.forEach( (value)=> {
    // console.log(value);
    return value;
})
// console.log(add);

// for each function is not return value 

// const value = [1,2,3,4,5,6,7,8,9,10];
//  let big = value.filter( (num) => num >= 5 )
//  console.log(big);

// const number = [1,2,3,4,5,6,7,8,9,10];
//  let bigNum = number.filter( (num) => (num <= 5) )

// const number2 = [1,2,3,4,5,6,7,8,9,10];
//  let bigNum = number2.filter( (num) => {
//   return  num >= 5
// })
//  console.log(bigNum);
 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004}, 
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008}, 
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},  {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition:2010 }, 
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014}, 
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }, 
    { title: 'Book Seven', genre: 'History', publish: 1986, dition: 1996 }, 
    { title: 'Book Eight', genre: 'Science', publish: 2011,  edition: 2016 }, 
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition:1989}, 
]

// console.log(books);

// books.filter( (name)=>{
//    console.log(name.title);
// })

// let Uboock = books.filter( (bk)=> bk.publish >= 1992);
// let Uboock = books.filter( (bk)=> bk.publish >= 1992 && bk.edition === 2010);
// let Uboock = books.filter( (bk)=> bk.publish >= 1992 && bk.genre == "Non-Fiction");

// console.log(Uboock);


let userBoock = books.filter( (ex)=> { 
    return ex.genre=='Science'
    })
console.log(userBoock);


