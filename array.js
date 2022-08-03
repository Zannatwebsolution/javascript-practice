const arr = [10,20,30,40,50,60,70,80,90,100,110];
console.log(arr.length); // Array Length 
console.log(arr["5"]); // Get Value by index
console.log(arr["11"] = 120); // add value by index
console.log(arr);
console.log(arr.indexOf(100)); // find index the value
console.log(arr.indexOf(250)); // -1 means the value not found in the array 
console.log(arr[15]); // undefined means value not found
console.log(arr.push(130)); // Add value in last element
console.log(arr);
console.log(arr.pop()); // Delete Last element
console.log(arr);
console.log(arr.unshift(5)); // add first element
console.log(arr);
console.log(arr.unshift(9)); // add first element
console.log(arr);
console.log(arr.shift()); // delete first element
console.log(arr);

var money = 50000;
if(money >= 80000){
	console.log("Buy Macbook Laptop");
}else if(money >= 60000){
    console.log("Buy Gaming Laptop");
}else if(money >= 40000){
    console.log("Buy lenovo Laptop");
}else if(money >= 20000){
    console.log("Buy Second hand Laptop");
}else {
	console.log("You don't have anough amount for buying Laptop");
}

