// i can't wrap this thing in funtion is pe thora guide kren mujhe!
    var c = "";

for (var i = 0; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        c += "*";
    }
    c += "\n"

}
console.log (c);



// sum of Array
function sumOfArray(sumS) {
var sum = 0;
for (let i = 0; i < sumS.length; i++) {
    sum = sum + sumS[i];
}
console.log(sum);
}

//new funtion
function datafetch() {
    var sumPrice = 0
    fetch('https://dummyjson.com/products')


    .then( res =>res.json())


    .then(function sum(data){
        console.log(data.products[0].price);
        for (let P = 0; P <3; P++) {
            sumPrice = sumPrice + data.products[P].price;
            
        }
        console.log(sumPrice)
        

    })
    .catch(function error(error) {
        console.log(error);
    })
 
} 
