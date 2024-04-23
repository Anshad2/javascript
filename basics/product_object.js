var product ={
    id : 1,
    name :"electronics",
    title : "Led tv"
}
console.log("price" in product ? "exist" : "not exist");

// if price > 2000 add new attribute offer:200 else 100

product.price > 2000 ? product.offer = 200 : product.offer=100

console.log(product);

// if price exist update price as current price +500  else add price as 2500
"price" in product? product["price"] +=500 : product["price"]=2500

console.log(product);

// or 

if ("price" in product){

    product.price+=500
}
else{
    product.price=2500
}

console.log(product);

