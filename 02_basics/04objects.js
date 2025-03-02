// object part 2 ....,

// there are two type of declearing a object first one is 'non single turn object' and 'single turn object' 

// Non single turn object 
const NonSingleTurn = {
}
// console.log(NonSingleTurn);

// single turn object
const singleTurn = new Object();
// console.log(singleTurn);

// nestead object...,

const nesteadObj = {
    email:"bhagu@google.com",
    firstObj:{
        Name:"bhagchand",
        age:18,
    },
    secondObj:{
        location:"hingangaon-Ne",
        secondChlidObj :{
            isLogin:true,
            education:"BBACA",
        },
    },
};
// console.log(nesteadObj);
// console.log(nesteadObj.firstObj);
// console.log(nesteadObj.secondObj);
// console.log(nesteadObj.secondObj.secondChlidObj);

// two object concatnetion...,

const fObj = {
    a:1,
    b:2,
    c:3
}
const sObj = {
    1:"a",
    2:"b",
    3:"c"
}

// console.log(fObj);
// console.log(sObj);

let nObj = Object.assign(fObj,sObj); // 'assign method' is use two object assign an new  object 
// console.log(nObj);

const NObj = {...fObj,...sObj}; // 'spread operator' same work like assign method (two / more) object concat and assign new variable and show you 
// console.log(NObj);

const tendarsObj = { }
tendarsObj.email = "bhagchand@gmail.com";
tendarsObj.Name = "bhagchand dhavale";
tendarsObj.age = 18;
tendarsObj.location = "Hingangaon-Ne";

// console.log(tendarsObj);

console.log(Object.keys(tendarsObj));
console.log(Object.values(tendarsObj));
console.log(Object.entries(tendarsObj));
console.log(tendarsObj.hasOwnProperty("location")); // hasOwnProperty methode is use to your object in one key is it or not 

