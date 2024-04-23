// data types : number ,string,boolean,undefined,null
// array in python its list
// object in python its called dictionary


var courses = ["java","python","testing","javascript"]
// orderd(elements are indexed)
console.log(courses[1]);
console.log(courses.indexOf("testing"))
console.log(courses.concat(['ui','cpp']))

// pop = removing last element and removed element returnrd
console.log(courses.pop())

// push = add in the array at the end
courses.push('frontend')
console.log(courses)

// shift = remove frst element returned remaining element in the array
courses.shift()
console.log(courses)

// unshift add to begginig
courses.unshift('backend')
console.log(courses)

// include = if that elemet present obtain true
console.log(courses.includes('python'))

// delete not a method 

// reverse
var colors = ["red","san","ban","maja","blue"]
console.log(colors.reverse())

// tostring = reomve the bracket and return string
console.log(colors.toString())

var name = 'python'
var duration = '6 months'
var courses = 'fullstack'
var arrays=[
    name,duration,courses
]

console.log(arrays)


// lowecase

var text = 'PYTHON IS AN INEREPTED LANGUAGE'
console.log(text.toLowerCase())


// unshift = ading an element to first of an array

// include() if element is there or not 
colors.includes("red") // return true or false

colors.reverse()
console.log(colors);