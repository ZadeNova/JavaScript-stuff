import * as HTMLTemplates from "./HTMLTemplates.js";
import * as AppStorage from "./localStorage.js";

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
	getTitle() {
		return this.#title;
	}

	getDescription() {
		return this.#description;
	}

	getDueDate() {
		return this.#dueDate;
	}

	getPriority() {
		return this.#priority;
	}

	getUniqueID() {
		return this.#unique_id;
	}

	getChecklist() {
		return this.#checklist;
	}

	getCategory() {
		return this.#project;
	}

	// Setters
	setTitle(title) {
		this.#title = title;
	}

	setDescription(description) {
		this.#description = description;
	}

	setDueDate(dueDate) {
		this.#dueDate = dueDate;
	}

	setPriority(priority) {
		this.#priority = priority;
	}

	setUniqueID(unique_id) {
		this.#unique_id = unique_id;
	}

	setChecklist(checklist) {
		this.#checklist = checklist;
	}

	setCategory(project) {
		this.#project = project;
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
	const toDoTime = document.getElementById("floatingTime").value;
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
}

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
