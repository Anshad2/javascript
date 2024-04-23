var num = 17;

// if num /by 3 print fizz
// if num /by 5 print buzz
// num num /by 15 print fizzbuzz
// else print num

var result = num % 15 == 0 ? "fizzbuzz" : num % 5 == 0? "buzz" : num % 3 == 0 ? "fizz" :num
console.log(result)