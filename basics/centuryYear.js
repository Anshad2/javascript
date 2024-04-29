// node --version
// node sample.js : to run in proper way

console.log('hello world');


var num1=10;
var num2=20;
var num=num1;
var num1=num2;
var num2=num;

var k=0;
console.log(num1,num2);

if(k>0){
    console.log('positive')
}
else if(k==0){
    console.log('num is ZERO')
}
else{
    console.log('negative')
}

var year=2000;

if (year%100==0){
    console.log('is century year')
}
else{
    console.log("not a century year")
}