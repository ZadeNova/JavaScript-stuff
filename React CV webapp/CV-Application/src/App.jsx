import { useState } from "react";
import "./css/main.css";
import CVForm from "./components/CVForm.jsx";
import CVDisplay from "./components/CVDisplay.jsx";

// A barebones CV creator web application.

function App() {
	//const [count, setCount] = useState(0);

	const [personalInfoData, setpersonalInfoData] = useState({
		Name: "",
		phoneNumber: "",
		ProfessionalTitle: "",
		Email: "",
		website_link: "",
	});

	//const [educationDataList, setEducationList] = useState([]);

	const [appState_educationInfoData, set_AppState_educationInfoData] = useState(
		[]
	);

	const [appState_jobExperienceInfoData, set_AppState_jobExperienceInfoData] =
		useState([]);

	const [appState_skillInfoData, set_AppState_skillInfoData] = useState([]);

	//const [jobExperienceDataList, setjobExperienceDataList] = useState([]);

	//const [technicalSkillsList, settechnicalSkillsList] = useState([]);

	const [technicalSkills, settechnicalSkills] = useState({ id: "", skill: "" });

	const handlePersonalFormDataChange = (newdata) => {
		setpersonalInfoData(newdata);
	};

	const deleteEducationInfo = (idToRemove) => {
		set_AppState_educationInfoData(
			appState_educationInfoData.filter(
				(education) => education.id !== idToRemove
			)
		);
		//onsole.log(appState_educationInfoData);
	};

	const deleteJobExperienceInfo = (idToRemove) => {
		set_AppState_jobExperienceInfoData(
			appState_jobExperienceInfoData.filter(
				(jobExperience) => jobExperience.id !== idToRemove
			)
		);
	};

	const deleteSkills = (idToRemove) => {
		set_AppState_skillInfoData(
			appState_skillInfoData.filter((skills) => skills.id !== idToRemove)
		);
	};

	const handleEducationFormDataChange = (newdata) => {
		//console.log(newdata)
		//console.log(newdata[0]);
		//console.log(appState_educationInfoData.some(education => education.id === newdata[0].id))

		// The update to app state will have an if statement. This is to determine if whether the change is an update or an addition.
		// Use uuids to find a match between the newdata and the app state data.

		if (
			appState_educationInfoData.some(
				(education) => education.id === newdata.id
			)
		) {
			console.log("The update if");
			const updated_appState_educationInfoData = appState_educationInfoData.map(
				(app_Edu) => (app_Edu.id === newdata.id ? newdata : app_Edu)
			);

			set_AppState_educationInfoData(updated_appState_educationInfoData);
		} else {
			set_AppState_educationInfoData([...appState_educationInfoData, newdata]);
		}
	};

	const handleJobExperienceFormChange = (newdata) => {
		if (
			appState_jobExperienceInfoData.some(
				(job_exp) => job_exp.id === newdata.id
			)
		) {
			console.log("The update for job exp");
			const updated_appState_JobExperienceData =
				appState_jobExperienceInfoData.map((job_exp) =>
					job_exp.id === newdata.id ? newdata : job_exp
				);

			set_AppState_jobExperienceInfoData(updated_appState_JobExperienceData);
		} else {
			set_AppState_jobExperienceInfoData([
				...appState_jobExperienceInfoData,
				newdata,
			]);
		}
	};

	const handleSkillFormChange = (newdata) => {
		// Continue on with this
		if (appState_skillInfoData.some((skill) => skill.id === newdata.id)) {
			console.log("The update for skill");
			const updated_appState_skillData = appState_skillInfoData.map((skill) =>
				skill.id === newdata.id ? newdata : skill
			);
			set_AppState_skillInfoData(updated_appState_skillData);
		} else {
			set_AppState_skillInfoData([...appState_skillInfoData, newdata]);
		}
	};

	const addtechnicalSkillsToList = (newdata) => {
		settechnicalSkillsList([...technicalSkillsList, newdata]);
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
							appState_skillInfoData={appState_skillInfoData}
							deleteEducation={deleteEducationInfo}
							deleteJobExperience={deleteJobExperienceInfo}
							deleteSkills={deleteSkills}
						></CVForm>
					</div>
					<div className="right-side">
						<CVDisplay
							personalInfoData={personalInfoData}
							educationData={appState_educationInfoData}
							jobData={appState_jobExperienceInfoData}
							skillsData={appState_skillInfoData}
						></CVDisplay>
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
