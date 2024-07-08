class ToDoObject {
	static ToDoObjectCount = 0;

	#title;
	#description;
	#dueDate;
	#priority;
	#notes;
	#checklist;
	#project;

	constructor(
		title,
		description,
		dueDate,
		priority,
		notes,
		checklist,
		project
	) {
		this.#title = title;
		this.#description = description;
		this.#dueDate = dueDate;
		this.#priority = priority;
		this.#notes = notes;
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

	getNotes() {
		return this.#notes;
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

	setNotes(notes) {
		this.#notes = notes;
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
			notes: this.#notes,
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

	const ToDoObject1 = new ToDoObject(
		toDoTitle,
		toDoDescription,
		toDoDate,
		toDoPriority,
		"",
		"",
		""
	);

	return ToDoObject1;
}

export function UpdateToDoObject() {}

export function countByProject(prjName) {
	return JSON.parse(localStorage.getItem("ToDoTasks")).filter(
		(todo) => todo.project === prjName
	).length;
}

export default ToDoObject;
