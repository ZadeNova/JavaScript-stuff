import styles from "./styles/styles.css";
import * as boostrap from "bootstrap";
import * as ToDo from "./ToDo.js";
// Task is under project.
// Find a way to display the projects at the navbar.

// Add Event Listeners

const createToDoObjectBtn = document.getElementById("btn_CreateToDo");
createToDoObjectBtn.addEventListener("click", handleToDoObjBtn);

function handleToDoObjBtn() {
	const data = ToDo.createToDoObject();
	console.log("hello");
	console.log(data);
}
