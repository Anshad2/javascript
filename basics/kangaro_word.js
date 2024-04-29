// from source word we can form target word

// from chicken can form hen

// step1 to create source word word count

var sourceString = "chicken"
var targetString = "hen"

// created a wc empty object
var wc = {}
// split the ch and chk if ch in wc then add +1 if not in wc set it 1
sourceString.split("").map(ch => ch in wc ? wc[ch] +=1 : wc[ch] =1)
console.log(wc);

// step2
// assign iskangarro word is true
var isKangarroWord = true
// then ch in target word
for (let ch of targetString){
// chk ch in wc and word count > 0
    if(ch in wc && wc[ch] > 0){
        // minus that word count
        wc[ch] -= 1
    
    }
    else{

        isKangarroWord = false
        break

    }
}
console.log(isKangarroWord ? "is kangarro word" : "not an kangarro word");