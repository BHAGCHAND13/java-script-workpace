const Myobj = {
    'js':"java script",
    'c++':"cpp",
    'rb':"ruby",
    'py':"pythone"
}

// console.log(Myobj);

 for (const key in Myobj) {
//     console.log(key);
 }


 for (const key in Myobj) {
//     console.log(Myobj[key]);
 }


for (const key in Myobj) {
    // console.log(`keys '${key}' and this values : '${Myobj[key]}'`);
}

const Myarr = ['js','cpp','html','ry','java'];
// console.log(Myarr);

// for (const key in Myarr) {
//     console.log(key)
// }

// for (const key in Myarr) {
//     console.log(Myarr[key])
// }


for (const key in Myarr) {
    // console.log(`your array key '${key}' and your array value '${Myarr[key]}'`);
}
