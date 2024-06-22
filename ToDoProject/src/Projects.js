import ToDoObjectClass from "./ToDo";


class projects {

    static projectCount = 0;

    constructor(){
        this.ToDoObjectsUnderProject = [];
    }

    addToDo(ToDoObject){
        if (ToDoObject instanceof ToDoObjectClass){
            this.ToDoObjectsUnderProject.push(ToDoObject);
        }
    }

    deleteToDo(ToDoObject){

    }
}



export default projects;
