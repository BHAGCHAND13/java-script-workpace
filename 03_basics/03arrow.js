// Arrow function & this keyword....,

const user = {
    userName : "bhagchand",
    age : 19,
    email : "babalu@gmail.com",

     wellMessege : function(){
        console.log(`my name is ${this.userName} `);
     }
     
}
// user.wellMessege();
// user.userName = "sam";
// user.wellMessege();

function code(){
   userName = "babalya";
   console.log(this.userName);
}
// code();

const chai = function(){
   UserName = "babalu";
   console.log(this.UserName);
}
// chai();

const chaiAurCode = () => {
   Username = "bhagchand";
   console.log(this.Username);
}
// chaiAurCode();

// Arrow function....,

const addTwoNumber = (num1,num2)=>{
   return num1 +num2;
}
// console.log(addTwoNumber(5,7));

const SecondFun = (a,b)=>{
   console.log(a+b);
}
// SecondFun(12,4);

const addtwo = (num ,num1) => num+num1
// console.log(addtwo(3,4))

const addthree = (num ,num1) => (num+num1)
// console.log(addthree(12,23))

const addfore = (num ,num1) => ({userName : "bhagchand"})
// console.log(addfore(1,2))