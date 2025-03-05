// function...,

function myFun(){
    console.log("bhagchand");
    console.log("bhagchand");
    console.log("bhagchand");
    console.log("bhagchand");
}
//  myFun();


function calculaterFun(a,b){
    console.log(a+b); 
}
// calculaterFun(5,8);

function calculaterFun2(a,b){
    return a+b; 
}
// console.log(calculaterFun2(5,8));

function calculaterFun3(a,b){
    return sum = a+b; 
}
//  calculaterFun3(2,9);
//  console.log(sum);
 

function allCalculaterFun(...num){
    console.log(num);
   }
//    allCalculaterFun(100,200,300);


function allCalculaterFun2(...num){
 return   sum = num[0]+num[1]+num[2];
}
allCalculaterFun2(100,200,300);
// console.log(sum);


const user ={
    UserName : "bhagchand",
    price : 3000,
    age : 18
}

function ObJHandle(inObject){
    console.log(`i am ${inObject.UserName} and my course fee is  ${inObject.price} thousend ok i complited`);
}
// ObJHandle(user);

function ObJHandle(inObject){
    console.log(`my name is ${inObject.Name} and my salery  ${inObject.salery} thousend ok i complited`);
}
// ObJHandle({
//     Name:"bablu",
//     salery:29999,  
// });


function ObJHandle(inObject){
    return (`my name is ${inObject.Name} and my salery  ${inObject.salery} thousend ok i complited`);
}
// console.log(ObJHandle({ Name:"bablu", salery:29999,  }));

const array = [199,299,399,400];
// console.log(array);

function arrayHandle(HandleArr){
    console.log(`my first index value is ${HandleArr[0]} and second one is ${HandleArr[1]}`);
}
// arrayHandle(array);


function arrayHandle2(HandleArr){
    return (`my Bba CA first year fee is ${HandleArr[0]} thousend and second year fee ${HandleArr[1]} thousend , then ( sir : ok i understand.., )`);
}
console.log(arrayHandle2([
    36000,
    18000
]));