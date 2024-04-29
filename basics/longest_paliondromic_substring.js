// longest palindromic substring in a string

var text = "RACECAR"

var result = "";

for(let i=0 ; i<text.length; i++ ){

    let [left,right]= [i,i];

    while(left>=0 && right < text.length && text[left]==text[right]){

        let currentPalindrome = text.substring(left,right+1)

        if(currentPalindrome.length >  result.length){

            result = currentPalindrome
        }
        left--;
        right++;
    

    }
}
console.log(result);




