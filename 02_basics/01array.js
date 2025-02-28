
// Array in java script....,

// we are three type declear of array...,
const arr = [1,2,3,4,5];
const myArr = ["shahaji","shivaji","sambhaji"];
const newArr = new Array(28,"bhagchand","bba(ca)");
// console.log(arr);
// console.log(myArr);
// console.log(newArr);

// array methods...., 

const myArr2 = [0,1,2,3,4,5];

// myArr2.push(6); //this method use to last adding 
// myArr2.pop(); // this method use to last deleting 

// myArr2.unshift(0); // this method use to adding first item 
// myArr2.shift(); //this methiod use to deleting first item 

// console.log(myArr2.includes(3)); //in array this types item are include OR not
// console.log(myArr2.indexOf(3));

let myArr3 = myArr2.join(); // this method use convert string and your array bind but not chenge your original array 
// console.log(myArr3);

// slice OR splice....,

// slice => this is use to strting number and ending number in print the array but not print exact end item 

const sArr = [0,1,2,3,4,5];

// let sliceArr = sArr.slice(0,3);
// console.log(sliceArr);

// splice => this method use to in array starting to ending all number print but not copy on your array chenge our original array and 
let newSArr = sArr.splice(1, 3);
console.log(newSArr);
console.log(sArr);






