let row = 3;
function insert_Row() {
    //Write your code here
	let cell = 2;
	const table = document.getElementById("sampleTable");
	let newTr = document.createElement("tr");
	for(let i=1;i<=cell;i++){
		let newTd = document.createElement("td");
		newTd.textContent = `New cell${i}`;
		newTr.appendChild(newTd);
	}
	row++;
	table.appendChild(newTr);

}
