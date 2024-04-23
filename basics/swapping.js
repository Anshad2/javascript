
// 2,5,1,10,3,9=10,2,9,2,5,1
var array=[2,5,1,10,3,9]

var i=1
while(i<=3){
    a=array.pop()
    array.unshift(a)
    i++
}

console.log(array)

// using for

for (let i1;i<=3;i++){
    array.unshift(array.pop())
}
console.log(array)