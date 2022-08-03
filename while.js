var i = 50;
while(i<=100){
	console.log("Hello World");
	i++;
}

var number = 58;
while(number <= 98){
	console.log("Number is "+ number);
	number++;
}

var numberEven = 412;
while(numberEven <= 456){
	if(numberEven % 2 === 0){
		console.log("Even Number is "+ numberEven);
	}
	numberEven++;
}

var numberOdd = 481;
while(numberOdd <= 623){
	if(numberOdd % 2 === 1){
		console.log("Even Number is "+ numberOdd);
	}
	numberOdd++;
}

for(var i=50; i<=100; i++){
	console.log("For Loop");
}

const learn = ["HTML", "CSS", "BOOTSTRAP", "TAILWIND", "JAVASCRIPT"];
for(var i=0; i<learn.length; i++){
	console.log(learn[i]);
}
for(var i = 30; i<=86; i++){
	if(i >=44){
		break;
	}
	console.log("Break Number is "+ i);
}

const mobile = ["Nokia", "Symphony", "Samsung"];
var mobilenum = 0;
while(mobilenum<mobile.length){
	console.log("We Use Mobile "+ mobile[mobilenum]);
	mobilenum++;
}

const book =[{name: "ABC", price: 100}, {name: "ACD", price: 250}, {name: "ADB", price: 500}, {name: "AKM", price: 50}];
for(var i=0; i<book.length; i++){
	if(book[i].price >= 200){
		console.log("Book under 200 tk "+ book[i].name );
	}
}