// Create local storage functions
// Function for create tasks , delete tasks , modify tasks.

// Create an array for TODO Objects and PROJECT OBJECTS.
// Save the array into the key value.

// Currently we are unable to store the value into localstorage. Basically we cant push the item into the storage.

export function createStorage_forApp() {
	const toDoArray = [];
	const toDoArrayJSON = JSON.stringify(toDoArray);
	localStorage.setItem("ToDoTasks", toDoArrayJSON);
	// localstorage.setItem("ToDoProjects",[]);
}

export function saveTasks_tostorage(Task) {
	if (typeof Storage !== "undefined") {
		// Access the storage and save the ToDO tasks inside the array.
		console.log("DATAA");
		const StoredToDoArray = JSON.parse(localStorage.getItem["ToDoTasks"]);
		StoredToDoArray.push(JSON.stringify(Task));
		console.log(StoredToDoArray);
	} else {
		console.log("it failed");
	}
}
