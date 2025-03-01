// singletion

// object literals...,

const mySym = Symbol("key 1")
const myBigNUmber = BigInt( 1n)

const jsUser = {
    Name:"bhagchand",
    age:18,
    email:"bhagchand@google.com",
    location:"hingangaon-Ne",   
    isLogin: false,
    "fullName":"BhagchandDhavle",
    isLastLogin:["sunday","monday","saturday"],
    [mySym]:"new key 1",
    [myBigNUmber]:123445n,
}


// console.log(jsUser.email);
// console.log(jsUser["fullName"]);
// console.log(jsUser["isLastLogin"]);
// console.log(typeof jsUser[mySym]);
// console.log(typeof jsUser[myBigNUmber]);

jsUser.email = "bhagchand@microsoft.com";
// console.log(jsUser.email);

// Object.freeze(jsUser); // freeze method use to your object in contend not chenging
jsUser.Name = "babalu";
console.log(jsUser.Name);

jsUser.oneUser=function(){
    console.log("heyy dhavale");
}
console.log(jsUser.oneUser());

jsUser.twoUser=function(){
    console.log(`my name ${this.Name} and my age is ${this.age}`);
}
console.log(jsUser.twoUser());
