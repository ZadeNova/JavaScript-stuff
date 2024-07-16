import * as HTMLTemplates from "./HTMLTemplates.js";
import * as AppStorage from "./localStorage.js";
import * as MainFile from "./index.js";

class ToDoObject {
	static ToDoObjectCount = 0;

	#title;
	#description;
	#dueDate;
	#priority;
	#unique_id;
	#checklist;
	#project;

	constructor(
		title,
		description,
		dueDate,
		priority,
		unique_id,
		checklist,
		project
	) {
		this.#title = title;
		this.#description = description;
		this.#dueDate = dueDate;
		this.#priority = priority;
		this.#unique_id = unique_id;
		this.#checklist = checklist;
		this.#project = project;
		ToDoObject.ToDoObjectCount++;
	}

	// Getters
	get getTitle() {
		return this.title;
	}

	get getDescription() {
		return this.description;
	}

	get getDueDate() {
		return this.dueDate;
	}

	get getPriority() {
		return this.priority;
	}

	get getUniqueID() {
		return this.unique_id;
	}

	get getChecklist() {
		return this.checklist;
	}

	get getCategory() {
		return this.project;
	}

	// Setters
	set setTitle(title) {
		this.title = title;
	}

	set setDescription(description) {
		this.description = description;
	}

	set setDueDate(dueDate) {
		this.dueDate = dueDate;
	}

	set setPriority(priority) {
		this.priority = priority;
	}

	set setUniqueID(unique_id) {
		this.unique_id = unique_id;
	}

	set setChecklist(checklist) {
		this.checklist = checklist;
	}

	set setCategory(project) {
		this.project = project;
	}

	toJSON() {
		return {
			title: this.#title,
			description: this.#description,
			date: this.#dueDate,
			priority: this.#priority,
			unique_id: this.#unique_id,
			checklist: this.#checklist,
			project: this.#project,
		};
	}
}

// Add methods to change each property in ToDoObject?
// Set properties to private?
// Add get and setters to classes
// Install the date pack so that formatting date is easier.

// Get ToDoObject values from create new task form
export function createToDoObject() {
	const toDoTitle = document.getElementById("floatingTitle").value;
	const toDoDescription = document.getElementById("floatingDescription").value;
	const toDoDate = document.getElementById("floatingDate").value;
	//const toDoTime = document.getElementById("floatingTime").value;
	const toDoPriority = document.getElementById("todoPriority").value;
	const toDoProject = document.getElementById("projectSelect").value;
	const UniqueID = generateUUID();
	const ToDoObject1 = new ToDoObject(
		toDoTitle,
		toDoDescription,
		toDoDate,
		toDoPriority,
		UniqueID,
		"",
		toDoProject
	);

	// test

	return { ToDoObject1, toDoProject };
}

export function UpdateToDoObject(id) {
	console.log("udpate func working");

	// Get Task ToDo item using the ID
	let todoObjectArray = JSON.parse(localStorage.getItem("ToDoTasks"));
	const index = todoObjectArray.findIndex((todo) => todo.unique_id === id);

	//todoObjectArray[index];

	// Set the values to the form
	const formTitle = document.getElementById("editfloatingTitle");
	const formDescription = document.getElementById("editfloatingDescription");
	const formDate = document.getElementById("editfloatingDate");
	const formPriority = document.getElementById("edittodoPriority");
	const formProjectSelect = document.getElementById("editprojectSelect");

	//console.log(todoObjectArray[index]);
	formTitle.value = todoObjectArray[index].title;
	formDescription.value = todoObjectArray[index].description;
	formDate.value = todoObjectArray[index].dueDate;
	formPriority.value = todoObjectArray[index].priority;

	// Update select project input values:
	const dataArray = JSON.parse(localStorage.getItem("Projects"));

	const selectElement = document.getElementById("editprojectSelect");
	selectElement.innerHTML = "";
	if (dataArray) {
		dataArray.forEach((element) => {
			const optionElement = document.createElement("option");
			optionElement.value = element.projectName;
			optionElement.textContent = element.projectName;

			selectElement.appendChild(optionElement);
		});
	}

	formProjectSelect.value = todoObjectArray[index].project;

	// Function to update the values
	let btnClicked = false;
	const updateToDoBtn = document.getElementById("btn_updateToDo");
	updateToDoBtn.addEventListener("click", () => {
		console.log("The save changes button has been clicked");

		// Set values
		todoObjectArray[index].title = formTitle.value;
		todoObjectArray[index].description = formDescription.value;
		todoObjectArray[index].dueDate = formDate.value;
		todoObjectArray[index].priority = formPriority.value;
		todoObjectArray[index].project = formProjectSelect.value;

		localStorage.setItem("ToDoTasks", JSON.stringify(todoObjectArray));

		// Need to update HTML too
		const tasksElement = document.getElementById("ToDoTasks");
		tasksElement.innerHTML = "";

		// New Array for the task's project.
		let todoNewObjectArray = JSON.parse(
			localStorage.getItem("ToDoTasks")
		).filter((task) => task.project === todoObjectArray[index].project);
		console.log("HELLO PROJECT NAMEEEE");
		todoNewObjectArray.forEach((element) => {
			const newTaskCard = document.createElement("div");
			newTaskCard.innerHTML = HTMLTemplates.TaskcardTemplate(element);
			tasksElement.append(newTaskCard);
		});

		// Add Update and Delete Event Listeners here:

		const deleteTaskBtn = document.getElementsByClassName("deleteBtn");
		for (let i = 0; i < deleteTaskBtn.length; i++) {
			deleteTaskBtn[i].addEventListener("click", MainFile.handleToDoDeleteBtn);
		}

		const updateTaskBtn = document.getElementsByClassName("updateBtn");
		for (let i = 0; i < updateTaskBtn.length; i++) {
			updateTaskBtn[i].addEventListener("click", MainFile.handleToDoUpdateBtn);
		}
	});
}

export function updateToDoObjectValues() {}

export function deleteToDoObject(id) {
	// Delete task from local storage.
	let ToDoObjectArray = JSON.parse(localStorage.getItem("ToDoTasks"));
	const index = ToDoObjectArray.findIndex((todo) => todo.unique_id === id);

	// get project name
	const projectName = ToDoObjectArray[index].project;

	if (index !== -1) {
		ToDoObjectArray.splice(index, 1);
	} else {
		console.warn("Object with ID", id, "not found. ");
	}

	// Set local storage with the new updated array.
	localStorage.setItem("ToDoTasks", JSON.stringify(ToDoObjectArray));

	// After that remove the task on the DOM/HTML side.
	HTMLTemplates.deleteTaskCard(id);

	// Update Project Count:
	HTMLTemplates.updateProjectCount(countByProject(projectName), projectName);
}

export function countByProject(prjName) {
	return JSON.parse(localStorage.getItem("ToDoTasks")).filter(
		(todo) => todo.project === prjName
	).length;
}

export function updateProjectNamesinTaskList(oldprjName, newPrjName) {
	console.log("UPDATED TASK PROJECT NAME");
	let todoArray = JSON.parse(localStorage.getItem("ToDoTasks"));
	todoArray.forEach((task) => {
		if (task.project === oldprjName) {
			
			task.project = newPrjName;
		}
	});

	localStorage.setItem("ToDoTasks", JSON.stringify(todoArray));
}

// Generate ID for task object
export function generateUUID() {
	// Get current time in milliseconds
	var d = new Date().getTime();

	// Define the UUID template with placeholder characters
	var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

	// Replace the placeholders with random hexadecimal digits
	uuid = uuid.replace(/[xy]/g, function (c) {
		// Generate a random number between 0 and 15
		var r = (d + Math.random() * 16) % 16 | 0;

		// Update value of d for the next placeholder
		d = Math.floor(d / 16);

		// Convert the number to a hexadecimal digit and return it
		return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
	});

	return uuid;
}

export default ToDoObject;
