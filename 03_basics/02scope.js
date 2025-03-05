// scope 

let scope1 = 10;
const scope2 = 20;
var scope3 = 30;

// console.table([scope1,scope2,scope3]);


if (true) {
    let s1 = 10;
    const s2 = 20;
    var s3 = 30;
    console.log(s1)
    console.log(s2);
}

// console.log(s1); // error s1 is not defind
// console.log(s2); // error s2 is not defind
console.log(s3);

