// object in js => dictionary in python

var student={
    id : 1807,
    name :"Anshad",
    department : "electronics",
    fees : 36000,
    batch : 2016

}
console.log(student.name);

console.log(student.batch);

// adding new property value

student.gender = "male"

console.log(student);

// chk for attribute exist or not 

if ("name" in student){

    console.log("present");
}
else{
    
    console.log("not present");
}