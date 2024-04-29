// pangram => in the chk entire alphebet is there

var text = "The quick brown fox jumps over the lazy dog"

var alphabet = "abcdefghijklmnopqrstuvwxyz"

var isPangram = true

for(let ch of alphabet){
    if(! text.includes(ch)){
        isPangram = false
        break;
    }
}

console.log(isPangram ? "is pangram" : "not a pangram");

// or
var isFalseExist = console.log(alphabet.split("").map(ch => text.includes(ch)).includes(false));
