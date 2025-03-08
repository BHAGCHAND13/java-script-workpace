//forEach...,

//  ["","",""];


const coding = ['js','php','java','python','cpp'];

coding.forEach(function (val){
// console.log(val);
})

coding.forEach( (item)=>{
    // console.log(item);
})

function inCode(cd){
console.log(cd);
}
// coding.forEach(inCode);

const pandav = ["Yudhishthira","Bhima","Arjuna","Nakula","Sahadeva"];

pandav.forEach( (item,index,array)=>{
    // console.log(item,index,array);
})


//  [{},{},{}];
const myCoding = [
    {
        languageName : "java Script",
        languageFileName : 'js'
    },
    {
        languageName : "c++",
        languageFileName : 'cpp'
    },
    {
        languageName : "python",
        languageFileName : 'py'
    }
]
myCoding.forEach( (obj)=>{
// console.log(obj.languageName);
})


myCoding.forEach( (obj)=>{
console.log(obj.languageFileName);
})
