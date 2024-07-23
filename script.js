let row = 3;
function insert_Row() {
    //Write your code here
	// let cell = 2;
	// const table = document.getElementById("sampleTable");
	// let newTr = document.createElement("tr");
	// for(let i=1;i<=cell;i++){
	// 	let newTd = document.createElement("td");
	// 	newTd.textContent = `New Cell${i}`;
	// 	newTr.appendChild(newTd);
	// }
	// row++;
	// table.appendChild(newTr);

	//***********
	    const table = document.getElementById('sampleTable');
    
    // Create a new row at the top (index 0)
    const newRow = table.insertRow(0);
    
    // Create and set text for the new cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';

}
