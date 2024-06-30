import styles from "./styles/styles.css";
import * as boostrap from "bootstrap";
import * as ToDo from "./ToDo.js";
import * as AppStorage from "./localStorage.js";
// Task is under project.
// Find a way to display the projects at the navbar.

// Add Event Listeners

const createToDoObjectBtn = document.getElementById("btn_CreateToDo");
createToDoObjectBtn.addEventListener("click", handleToDoObjBtn);

// Function to initialize basic stuff for the app like storage.

(function AppInit() {
	AppStorage.createStorage_forApp();
	console.log("App function started.");
})();

function handleToDoObjBtn() {
	const data = ToDo.createToDoObject();
	console.log("hello");
	console.log(data);

	// Once you create the task , save the task into storage array

	// Saving newly object into storage array.
	AppStorage.saveTasks_tostorage(data);
}
