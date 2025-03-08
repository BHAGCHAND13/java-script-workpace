// this loop is array specific loops...,
// for of loop...,


let arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

let greeting = "Jay Shree Ram";
for (const grret of greeting) {
    // console.log(grret);
}


let greetOne = "Radhe Radhe";
for (const gOne of greetOne) {
    if(gOne === " "){
       continue;
    }
    // console.log(gOne);
    
}


// Maps....,

// const map = new Map();
// map.set("IN","india")
// map.set("USA","united state of america")
// map.set("FR","france")

// console.log(map);


const mapTwo = new Map();
mapTwo.set("IN","india")
mapTwo.set("USA","united state of america")
mapTwo.set("FR","france")

// console.log(mapTwo);
for (const key of mapTwo) {
    // console.log(`${key}`);
}
for (const [key] of mapTwo) {
    // console.log(`${key}`);
}
for (const [key,value] of mapTwo) {
    // console.log(`${key} := ${value}`);
}