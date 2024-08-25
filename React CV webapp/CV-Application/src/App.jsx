import { useState } from "react";
import "./css/main.css";
import CVForm from "./components/CVForm.jsx";
import CVDisplay from "./components/CVDisplay.jsx";



function App() {
	//const [count, setCount] = useState(0);

	const [personalInfoData, setpersonalInfoData] = useState({
		Name: "",
		phoneNumber: "",
	});

	const [educationDataList, setEducationList] = useState([]);

	const [appState_educationInfoData, set_AppState_educationInfoData] = useState([]);

	const [appState_jobExperienceInfoData, set_AppState_jobExperienceInfoData] = useState([]);

	const [jobExperienceDataList, setjobExperienceDataList] = useState([]);

	// const [jobExperienceData, setjobExperienceData] = useState({
	// 	id: "",
	// 	jobTitle: "",
	// 	companyName: "",
	// 	jobstartDate: "",
	// 	jobendDate: "",
	// 	jobResponsibilities: "",
	// });

	const [technicalSkillsList , settechnicalSkillsList] = useState([])

	const [technicalSkills, settechnicalSkills] = useState(
		{id:"",
			skill:"",
		}
	);

	const handlePersonalFormDataChange = (newdata) => {
		setpersonalInfoData(newdata);
	};

	const addEducationInfoToList = (newdata) => {
		setEducationList([...educationDataList, newdata]);
	};

	const deleteEducationInfoFromList = (idToRemove) => {
		setEducationList(educationDataList.filter((education) => education.id !== idToRemove));
	};

	const deleteJobExperienceInfoFromList = (idToRemove) => {
		setjobExperienceDataList(jobExperienceDataList.filter((jobExperience) => jobExperience.id !== idToRemove))
	};

	const deleteSkills = (idToRemove) => {
		settechnicalSkillsList(technicalSkillsList.filter((skills) => skills.id !== idToRemove))
	};

	const handleEducationFormDataChange = (newdata) => {

		//console.log(newdata)
		//console.log(newdata[0]);
		//console.log(appState_educationInfoData.some(education => education.id === newdata[0].id))

		// The update to app state will have an if statement. This is to determine if whether the change is an update or an addition.
		// Use uuids to find a match between the newdata and the app state data.


		if (appState_educationInfoData.some(education => education.id === newdata.id)){
			console.log('The update if')
			const updated_appState_educationInfoData = appState_educationInfoData.map(app_Edu => app_Edu.id === newdata.id ? newdata : app_Edu);
	
			set_AppState_educationInfoData(updated_appState_educationInfoData);
		}
		else{
			set_AppState_educationInfoData([...appState_educationInfoData, newdata]);
		}
		
	};

	const handleJobExperienceFormChange = (newdata) => {
		setjobExperienceData(newdata);
	};

	const addJobInfoToList = (newdata) => {
		setjobExperienceDataList([...jobExperienceDataList, newdata]);
	};

	const handleSkillFormChange = (newdata) => {
		settechnicalSkills(newdata)
	}

	const addtechnicalSkillsToList = (newdata) => {
		
		settechnicalSkillsList([...technicalSkillsList , newdata]);
	};



	return (
		<>
			<div className="content">
				<h1 className="AppTitle">CV Application</h1>
				<div className="container">
					<div className="left-side">
						<CVForm
							onPersonalInfoDataChange={handlePersonalFormDataChange}
							personalInfoFormData={personalInfoData}
							appState_educationInfoData={appState_educationInfoData}
							onEducationInfoChange={handleEducationFormDataChange}
							appState_jobExperienceInfoData={appState_jobExperienceInfoData}
							onJobExperienceInfoChange={handleJobExperienceFormChange}
							onSkillInfoChange={handleSkillFormChange}
							addSkillsToList={addtechnicalSkillsToList}
							educationList={educationDataList}
							jobExperienceList={jobExperienceDataList}
							skillInfoData={technicalSkills}
							skillsList={technicalSkillsList}
							deleteEducation={deleteEducationInfoFromList}
							deleteJobExperience={deleteJobExperienceInfoFromList}
							deleteSkills={deleteSkills}
						></CVForm>
					</div>
					<div className="right-side">
						<h3>{personalInfoData.Name + personalInfoData.phoneNumber}</h3>
						<h4>{console.log(appState_educationInfoData)}</h4>
						{console.log(jobExperienceDataList)}
					</div>
				</div>
			</div>
		</>
	);

	// return (
	//   <>
	//     <div>
	//       <a href="https://vitejs.dev" target="_blank">
	//         <img src={viteLogo} className="logo" alt="Vite logo" />
	//       </a>
	//       <a href="https://react.dev" target="_blank">
	//         <img src={reactLogo} className="logo react" alt="React logo" />
	//       </a>
	//     </div>
	//     <h1>Vite + React</h1>
	//     <div className="card">
	//       <button onClick={() => setCount((count) => count + 1)}>
	//         count is {count}
	//       </button>
	//       <p>
	//         Edit <code>src/App.jsx</code> and save to test HMR
	//       </p>
	//     </div>
	//     <p className="read-the-docs">
	//       Click on the Vite and React logos to learn more
	//     </p>
	//   </>
	// )
}

export default App;
