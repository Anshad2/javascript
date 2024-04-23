// map(),filter(),reduce(),sort()

// Map() => to perform a specific functionality in an array


var arr = [1,5,4,5,9]

// 
var indexs = arr.map((num,index)=>index)
console.log(indexs)

var squre = arr.map((num)=>num**2)
console.log(squre)

// cube

var cube =arr.map((num)=>num**3)
console.log(cube)


// filter()  if condition use filter

var arr = [2,3,4,5,6,7,8,9]

var even = arr.filter((num)=>num % 2 ==0)
console.log(even)


var odd = arr.filter((num)=> num%2!=0)
console.log(odd)

var numGt5 = arr.filter((num)=>num>5)
console.log(numGt5)


// reduce()=> only one output max,min,product,sum
// 2 parameter 

var total = arr.reduce((n1,n2)=>n1+n2)
console.log(total)

var product = arr.reduce((n1,n2)=>n1*n2)
console.log(product)

var largestNum = arr.reduce((n1,n2)=>n1 >n2 ? n1 : n2)
console.log(largestNum);

var smallNum = arr.reduce((n1,n2)=> n1 < n2 ? n1 : n2)
console.log(smallNum)


// fetch all even position numbers
var arr = [1,3,5,6,8,9]
//         0 1 2 3 4 5

var evenPosition = arr.filter((num,index)=>index % 2 ==0)
console.log(evenPosition)

var oddPosition = arr.filter((num,index)=>index% 2!=0)
console.log(oddPosition)


var arr = [1,2,3,4,5,6]

// take odd position reverse it and add to odd position

var oddPosition = arr.filter((num,index)=> index%2!=0).reverse()
var index =1;
for (let num of oddPosition) {
    arr[index] = num
    index+=2
}
console.log(arr)


// sort() => sorting object

arr.sort((o1,o2)=>o1-o2)  // ascending if o1 < o2 ? -1:1

arr.sort((o1,o2)=>o2-o1) // descending if o1 < o2 ? 1:-1

