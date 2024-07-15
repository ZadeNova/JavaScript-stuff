import * as HTMLTemplates from "./HTMLTemplates.js";
import * as mainFile from "./index.js";
import * as ToDo from "./ToDo";
class projects {
	static projectCount = 0;

	projectName;

	constructor(prjName) {
		//this.ToDoObjectsUnderProject = [];
		this.projectName = prjName;
		projects.projectCount++;
	}
}

export function createProject() {
	const projectTitle = document.getElementById("addProject").value;

	const projectObject = new projects(projectTitle);

	return projectObject;
}

export function deleteProject(id) {
	let projectArray = JSON.parse(localStorage.getItem("Projects"));
	const index = projectArray.findIndex((proj) => proj.projectName === id);

	if (index !== -1) {
		projectArray.splice(index, 1);
	} else {
		console.warn("Object with project Name", id, " not found.");
	}
	localStorage.setItem("Projects", JSON.stringify(projectArray));
}

export function updateProject(id) {
	let oldprojectName = id;
	let projectArray = JSON.parse(localStorage.getItem("Projects"));

	const index = projectArray.findIndex((proj) => proj.projectName === id);

	// Set the html values for the form.
	const editProjectTitle = document.getElementById("editProject");
	editProjectTitle.value = projectArray[index].projectName;

	// Update the values
	const updateProjectModalBtn = document.getElementById("btn_editProject");
	updateProjectModalBtn.addEventListener("click", () => {
		console.log("The save changes button for project has been clicked");

		// Set values
		projectArray[index].projectName = editProjectTitle.value;
		let newPrjName = editProjectTitle.value;
		localStorage.setItem("Projects", JSON.stringify(projectArray));

		// Update the todo list projects property as well.
		ToDo.updateProjectNamesinTaskList(oldprojectName, newPrjName);
		// Update HTML
		mainFile.generateProjectCards();

		// Update project count;
		HTMLTemplates.updateProjectCount(
			ToDo.countByProject(newPrjName),
			newPrjName
		);
		// Rest of the html updates is in the index.js function.
	});
}

export default projects;
