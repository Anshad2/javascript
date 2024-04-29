// same alphabet but diffrent word called anagram

// eg:silent => listen

// string to array by using split()

// array object only sorted 

// split() is string method not applay on array object

var string1 = "silent"

var string2 = "listen"

var strString1 = string1.split("").sort().join("")

var strString2 = string2.split("").sort().join("")

console.log(strString1 == strString2 ? "is anagram" : "not an anagram");



