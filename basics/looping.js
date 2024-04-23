// looping

// while
// condition,increment,or decreament

// for
// initiailisation

// let num =1
// while(num<10){
//     console.log(num)
//     num++
// }

var num=123;
while (num!=0){
    let digit=num%10
    console.log(digit)
    num=Math.floor(num/10)
}


// for

// for(initialization,range;incre or decre)
// loop body

for(let i=0;i<10;i++){
    let res = i%2==0?i:""
    console.log(res)
}

