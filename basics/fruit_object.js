// convert object into nested array
// object.entries
var fruits={
    "apple":265,
    "mango":50,
    "orange":99,
    "watermelon":20,
    "banana":70
}

// convert this object into nested array

var data = Object.entries(fruits)
console.log(data);

data.sort((o1,o2) => o2[1]-o1[1])

console.log(data[0]);