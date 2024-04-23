// var add =(num1,num2)=>num1+num2
// in arrow fn no function name and return
// arrow similar that of lambda
var add = (num1,num2)=>num1+num2
var sub = (num1,num2)=>num1-num2
console.log(sub(500,200));
console.log(add(100,200));


var getLastDigit=(num)=> num%10
console.log(getLastDigit(107));


function smartSub(n1,n2){
    // largest -smallest
    // if n1 is largest return n1-n2
    // if n2 largst n2-n1
    
        return n1>n2 ? n1-n2 : n2-n1
    
}
console.log(smartSub(10,23))

// 
var smartSub=(n1,n2)=> n1>n2? n1-n2 : n2-n1
console.log(smartSub(10,20))

// create an arrow function lastdigitmax with two params num1 num2
//         return number that contain largest digit in last place
// sample input lastDigitMax(120,87)
// output : 87


// function lastDigitMax (num1,num2){
//     return num1 % 10 > num2 %10 ? num1 :num2
// }

var lastDigitMax = (num1,num2) =>  num1 % 10 > num2 % 10 ? num1 :num2
console.log(lastDigitMax(127,870));