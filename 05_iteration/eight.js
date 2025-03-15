// reduse method...,

const myarr = [1,2,3];

// newarr = myarr.reduce( function(acc,currval){
//     console.log(`acc value ${acc} and currval ${currval}`);
//     return acc + currval;
// },0)
// console.log(newarr);

    // OR  some code are same nut up code is readble and down code is smart 


// newArr = myarr.reduce( (acc,index) => (acc+index),0);
// console.log(newArr);

const course = [
    {
        courseName:"js",
        couresPrice:3999,
    },
    {
        courseName:"py",
        couresPrice:2999,
    },
    {
        courseName:"cpp",
        couresPrice:5999,
    },
];

let allCoursePrise = course.reduce( (acc,price)=> (acc+price.couresPrice),0 )
console.log(allCoursePrise);

//  some code are some 

let sumCoursePrice = course.reduce(function(acc,index){
    console.log(`first course price : ${acc} and second course price : ${index.couresPrice}`)
    return acc + index.couresPrice;
},0)
console.log(sumCoursePrice);


