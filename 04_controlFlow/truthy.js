const userEmail = "";

if(userEmail){
    // console.log("go to user email");   
} else {
    // console.log("don't have user email");   
}

// if(1) console.log("ok !");


// if(1) console.log("ok !");
// else  console.log("not ok !");

// if("") console.log("ok !");
// else console.log("not ok !");

// falsy values 
// falsy ( 0 , "" , -0 , bigint 0n , null , undefine , Nan )

// truthy values 
// truthy (" ", "0", 1 , "false", [] , {} , function(){} )


// nullish coalescing operator (??) . null undefind 

let val1;

val1 = 5??34;
// console.log(val1);

val1 = null??19;
// console.log(val1);

val1 = undefined??12;
// console.log(val1);

val1 = undefined??null??2;
// console.log(val1);

