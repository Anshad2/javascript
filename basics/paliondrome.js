// word = reverse word

var text = "malayalam"

var reverseString = text.split("").reverse().join("")

console.log(text == reverseString ? "palindrome" : "not a palindrome");