var arr =[45,65,56,152,456,154,5,6,8];
var smallNumber = arr[0];
for(let i=0; i < arr.length; i++){
	const element = arr[i];
	if(element < smallNumber){
		smallNumber=element;
	}
};
console.log(smallNumber);

var a=2; 
var b=3; 
if(a<b){
    console.log("Hello");
};