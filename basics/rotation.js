// rotate array one time that is 400,300,200,100
var arr = [100,200,300,400]

for(let i=0 ; i< 3 ; i++){
    arr.unshift(arr.pop());
}
console.log(arr);

400 