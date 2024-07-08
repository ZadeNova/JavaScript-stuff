import ToDoObjectClass from "./ToDo";

class projects {
	static projectCount = 0;

	projectName;

	constructor(prjName) {
		this.ToDoObjectsUnderProject = [];
		this.projectName = prjName;
		projects.projectCount++;
	}
}

export default projects;
