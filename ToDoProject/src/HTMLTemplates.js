export default function cardTemplate(prjName, numOfTasks) {
	return `
    
     <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">${prjName}</p>
                <p>Hover Me</p>
            </div>
            <div class="backSide">
                <p class="title">${numOfTasks} Tasks under ${prjName}</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
`;
}
