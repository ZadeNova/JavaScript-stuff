export function cardTemplate(prjName, numOfTasks) {
	return `
    
     <div class="myCard" id="${prjName}">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">${prjName}</p>
                <p>Hover Me</p>
            </div>
            <div class="backSide">
                <p class="title"><span id="${prjName}count">${numOfTasks}</span> Tasks under ${prjName}</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
`;
}


export function TaskcardTemplate(task){

    let colorPriority;
    
    switch (task.priority) {
    case "Urgent":
        colorPriority = ".priority-level urgent"; // Red for urgent tasks
        break;
    case "High":
        colorPriority = "priority-level high"; // Orange for high-priority tasks
        break;
    case "Medium":
        colorPriority = "priority-level medium"; // Yellow for medium-priority tasks
        break;
    case "Low":
        colorPriority = "priority-level low"; // Light blue for low-priority tasks
        break;
    }


    return `
        <div class="taskcard">
    <div class="taskcontent">
        <p class="heading">${task.title}
        </p>
        <span class="${colorPriority}" >Priority Level:${task.priority}</span>
        <p class="para">
            ${task.description}
        </p>
        <p>Due by ${task.date}</p>
        <div class="flex-container">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    </div>
    </div>
    `
}

export function generateSelectProjects(){
    const dataArray = JSON.parse(localStorage.getItem("Projects"));

    const selectElement = document.getElementById("projectSelect");

    if (dataArray){
        dataArray.forEach(element => {
            const optionElement = document.createElement("option");
            optionElement.value = element.projectName;
            optionElement.textContent = element.projectName;

            selectElement.appendChild(optionElement);
        });
    }
}

export function updateProjectCount(prjCount,prjName){
    let element = document.getElementById(prjName+"count");
    element.textContent = String(prjCount);
    console.log('it executed?')
}