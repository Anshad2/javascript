// is a number that is equal to the sum of its digits
// 370
var num =370;
// for taking length of number

var len = String(num).length
// length=3
var sum=0
var check=num;

while(num!=0){
    let digit = num%10
    // 10
    let res = digit**len
    // last digi**3
    sum = sum+res
    num=Math.floor(num/10)
    //  num=37 
}
console.log(sum==check?"is an amstrong number":"not an amstrong number")
