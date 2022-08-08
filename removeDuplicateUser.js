const names = ["Abul", "Kalam", "Robbil", "Abul", "Rohi", "Rabbil", "Saim", "Kalam", "Rohi"];

function removeDuplicate(names){
	const unique = [];
	for(let i=0; i<names.length; i++){
		const name = names[i];
		if(unique.includes(name) === false){
			unique.push(name);
		}
	}
	return unique;
}
console.log(removeDuplicate(names));