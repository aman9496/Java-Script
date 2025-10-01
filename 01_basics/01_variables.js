const student_id = 3011007
let student_name = "AMAN"
let student_email = "amansahu01072003@gmail.com"
var student_password = "12345"
student_city = "Banglore"
let student_state  // undefind value
let student_contact=null  // null value
// student_id = 123 // not allowed
student_email = "sahuaman@gmail.com"
student_password = "67890"
student_city = "Hydrabad"

 
console.log(student_id);

console.table([student_id,student_name,student_email,student_password,student_city,student_state,student_contact]);
/*
perfer not to use var
because of issue in block scope and functional scope
*/

