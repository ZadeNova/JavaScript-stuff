// Create local storage functions
// Function for create tasks , delete tasks , modify tasks.

// Create an array for TODO Objects and PROJECT OBJECTS.
// Save the array into the key value.

// Currently cant add multiple items to the storage.

export function createStorage_forApp() {
	// Create localStorage for Todo
	const toDoArray = [];
	const toDoArrayJSON = JSON.stringify(toDoArray);
	localStorage.setItem("ToDoTasks", toDoArrayJSON);
	// localstorage.setItem("ToDoProjects",[]);

	// Create localstorage for Projects
	const projectArray = [];
	const projectArrayJSON = JSON.stringify(projectArray);
	localStorage.setItem("Projects", projectArrayJSON);
}

export function saveTasks_tostorage(Task) {
	if (typeof Storage !== "undefined") {
		// Access the storage and save the ToDO tasks inside the array.
		console.log("DATAA");

		// Create the storage
		if (localStorage.getItem("ToDoTasks") === null) {
			console.log(
				"ToDo storage null so create new todo local storage executed"
			);
			const toDoArray = [];
			const toDoArrayJSON = JSON.stringify(toDoArray);
			localStorage.setItem("ToDoTasks", toDoArrayJSON);
		} else {
			const StoredToDoArray = JSON.parse(localStorage.getItem("ToDoTasks"));

			StoredToDoArray.push(Task);
			//console.log(StoredToDoArray);

			// Save the newly updated array
			localStorage.setItem("ToDoTasks", JSON.stringify(StoredToDoArray));
		}
	} else {
		console.log("it failed");
	}
}

export function saveProject_tostorage(project) {
	if (typeof Storage !== "undefined") {
		// Create the storage

		if (localStorage.getItem("Projects") === null) {
			console.log(
				"Project storage null so create new project local storage executed"
			);
			const projectArray = [];
			const projectArrayJSON = JSON.stringify(projectArray);
			localStorage.setItem("Projects", projectArrayJSON);
		} else {
			const storedProjectArray = JSON.parse(localStorage.getItem("Projects"));

			storedProjectArray.push(project);

			localStorage.setItem("Projects", JSON.stringify(storedProjectArray));
		}
	} else {
		console.log("It Failed. Project local storage side");
	}
}
