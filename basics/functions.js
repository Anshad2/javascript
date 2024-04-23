// function fun_name(parameter1,parameter2){
//  return statement
// }
// 

function Add(a,b){
    return a+b
}

console.log(Add(1,2))

function greatest(x,y){
    if (x > y){
        return x
    }
    else{
        return y
    }
}
console.log(greatest(1,2))


// ternary operator

function great(x,y){
    let res = x>y?x:y
    return res
}
console.log(great(1,2))



function addNumber(num1,num2){
    return num1+num2
}
console.log(addNumber(100,200))

// hoisting : fon for function   the built-in behavior of the language through which declarations of functions,
//  variables, and classes are moved to the top of their scope – all before code execution.
console.log(addNumber(100,200))
function addNumber(num1,num2){
    return num1+num2
 } // 9hoisting