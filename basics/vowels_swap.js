// // // vowels swaping
// // // using 2 pointer aproach


var text = "welcomepython".split('');

const vowels = "aeiou";

var length = text.length;

console.log("Original text:", text.join(''));

var start = 0;

var end = length - 1;

while (start < end) {

    // swap if both characters are vowels

let startCharacter = text[start]

let endCharacter = text[end]

    if (vowels.includes(startCharacter) && vowels.includes(endCharacter)) {

        [text[start], text[end]] = [text[end], text[start]]; // swapping

        start++;
        end--;

         // Move to the next characters

    } 
    else if (!vowels.includes(startCharacter)){

        start++;
    }
        
     else if (!vowels.includes(endCharacter)){

            end--;
        }
        
    }


console.log("After swapping vowels:", text.join('')); 

