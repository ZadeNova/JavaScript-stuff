import styles from "./styles/styles.css";
import * as boostrap from "bootstrap";
import ToDoObject, * as ToDo from "./ToDo.js";
import * as AppStorage from "./localStorage.js";
import projects, * as Projects from "./Projects.js";
import cardTemplate, * as HTMLTemplates from "./HTMLTemplates.js";
// Task is under project.

// Create default data for the App
localStorage.clear();

const prj1 = new projects("Life Improvement");

const prj2 = new projects("Finances");

let prjArray = [prj1, prj2];
let prjArrayJSON = JSON.stringify(prjArray);

localStorage.setItem("Projects", prjArrayJSON);

// Initialize Data for Todo
const todo1 = new ToDoObject(
	"Finish Coding Course",
	"Try your best to complete the Odin Project Javascript Course",
	new Date("2024-12-30"),
	"High",
	"",
	"",
	"Life Improvement"
);

const todo2 = new ToDoObject(
	"Do 15 pull ups by August 30th 2024",
	"Train in the gym to do pull ups",
	new Date("2024-08-30"),
	"Medium",
	"",
	"",
	"Life Improvement"
);

const todo3 = new ToDoObject(
	"Save $1000 by 30th September 2024",
	"Save 1k before 30th september",
	new Date("2024-09-30"),
	"Medium",
	"",
	"",
	"Finances"
);

let todoArray = [todo1, todo2, todo3];
let todoArrayJSON = JSON.stringify(todoArray);
localStorage.setItem("ToDoTasks", todoArrayJSON);

// Code to initialize the hard-coded projects and todo tasks.
// Add eventlistener to display all the task under each project , when you click on a project.
const prjElement = document.getElementById("Projects");

for (let i = 0; i < JSON.parse(localStorage.getItem("Projects")).length; i++) {
	const newCard = document.createElement("div");
	newCard.addEventListener("click", displayTaskUnderProjects);
	newCard.innerHTML = cardTemplate(
		JSON.parse(localStorage.getItem("Projects"))[i].projectName,
		ToDo.countByProject(
			JSON.parse(localStorage.getItem("Projects"))[i].projectName
		)
	);

	prjElement.append(newCard);
}

const tasksElement = document.getElementById("ToDoTasks");

for (
	let i = 0;
	i < JSON.parse(localStorage.getItem("ToDoTasks")).length;
	i++
) {}

// Add Event Listeners

const createToDoObjectBtn = document.getElementById("btn_CreateToDo");
createToDoObjectBtn.addEventListener("click", handleToDoObjBtn);

const resetAppBtn = document.getElementById("resetApp");
resetAppBtn.addEventListener("click", resetAppToDefault);
// Function to initialize basic stuff for the app like storage.

// (function AppInit() {
// 	AppStorage.createStorage_forApp();
// 	console.log("App function started.");
// })();

function handleToDoObjBtn() {
	const data = ToDo.createToDoObject();
	//console.log("hello");
	console.log(data);

	// Once you create the task , save the task into storage array

	// Saving newly object into storage array.
	AppStorage.saveTasks_tostorage(data);
}

function resetAppToDefault() {
	console.log("App reset!");
	localStorage.clear();
	AppStorage.createStorage_forApp();

	// Initialize Data for Project
	const prj1 = new projects("Life Improvement");

	const prj2 = new projects("Finances");

	let prjArray = [prj1, prj2];
	let prjArrayJSON = JSON.stringify(prjArray);

	localStorage.setItem("Projects", prjArrayJSON);

	// Initialize Data for Todo
	const todo1 = new ToDoObject(
		"Finish Coding Course",
		"Try your best to complete the Odin Project Javascript Course",
		new Date("2024-12-30"),
		"High",
		"",
		"",
		"Life Improvement"
	);

	const todo2 = new ToDoObject(
		"Do 15 pull ups by August 30th 2024",
		"Train in the gym to do pull ups",
		new Date("2024-08-30"),
		"Medium",
		"",
		"",
		"Life Improvement"
	);

	const todo3 = new ToDoObject(
		"Save $1000 by 30th September 2024",
		"Save 1k before 30th september",
		new Date("2024-09-30"),
		"Medium",
		"",
		"",
		"Finances"
	);

	let todoArray = [todo1, todo2, todo3];
	let todoArrayJSON = JSON.stringify(todoArray);
	localStorage.setItem("ToDoTasks", todoArrayJSON);
}

function displayTaskUnderProjects() {}
