console.log("bhagchand");
const studentId = 12345;
let studentName = "bhagchand";
var studentEmail = "bhagchand@gmail.com";
student = "male/female";
let sureName;


studentEmail = "dhavale@gamil.com";
// studentId = 28; - becouse it is a constant value thereof studentId is not update
studentName = "dhavale";
student = "male";

/* 
prefer not to use var,
becouse is issue in block scope and functional scope 
*/
console.log(studentId);

/*
console.table();
console.table is second method in js it is use multiple data show on one 
console windows,
*/
console.table([studentId,studentName,studentEmail,student,sureName]);

