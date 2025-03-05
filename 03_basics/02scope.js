// scope 

let scope1 = 10;
const scope2 = 20;
var scope3 = 30;
// console.table([scope1,scope2,scope3]);

if (true) {
    let s1 = 10;
    const s2 = 20;
    var s3 = 30;
    // console.log(s1)
    // console.log(s2);
}
// console.log(s1); // error s1 is not defind
// console.log(s2); // error s2 is not defind
console.log(s3);


function one(){
    const userName = " bhagchand";
    function two(){
        const webSide = "BBA CA";
        console.log("yourName",userName); // you access parent to chaild
      }
    //   console.log(webSide); // did not access you chaild to parent but you access parent in chaild
      two();
}
// one();


// +++++++++++++++ hosting ++++++++++++++++

addOne(4)
function addOne(num){
    console.log(num+1); 
}


addTwo(5); // cannot access before initilization becouse this is a function but this function in assign variable name and then variable name is function name 
const addTwo = function(num){
    console.log(num*2); 
}


