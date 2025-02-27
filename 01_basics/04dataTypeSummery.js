// there are 2 type of data type...
// (1) : primitive,
// (2) : Non-primitive,

// primitive data Type...

// 7 number , BigInt , string , boolean , null , undefind , symbol.

const score = 100;
const logIn = "bhagchand";
const logOut = true;
const value = null;
let userEmail;  // ex- userEmail = undefind;
const valueBigInt = 12345678765445n;
const id = Symbol(123);
// console.log(typeof(id));


// refarance Type (Non primitive)...

// array , object , function.

const myArray = [12,34,56,78,90,100];
// console.log(myArray);

const myObject = {
    name: "bhagchand",
    age: 19,
    qualification: "softwere devoloper",
};
// console.log(typeof(myObject));

function myFunction(){
    console.log("it's my functuon what are work in me");
}
// console.log(typeof(myFunction));


//  ---------------------heap & stack memory-----------------

// stack... 
// stack memory means premitive data type
let userEmailId = "usergoogle.com";
let myEmailId =  userEmailId;
myEmailId = "mygoogle.com";

// console.log( user@EmailId);
// console.log(my@EmailId);

// Heap... 
// Hep memory means Non-premitive.(refarance) data type

let oneUser={
     name: "bhagchand",
     email:"bhagchand@google.com",
     Id:28
};
let twoUser = oneUser;
twoUser.email="dhavale@google.com";
console.log(oneUser);
console.log(twoUser);