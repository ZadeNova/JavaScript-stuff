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

	const [educationInfoData, seteducationInfoData] = useState({
		schoolName: "",
		qualification: "",
		startDate: "",
		endDate: "",
	});

	const [jobExperienceDataList, setjobExperienceDataList] = useState([]);

	const [jobExperienceData, setjobExperienceData] = useState({
		jobTitle: "",
		companyName: "",
		jobstartDate: "",
		jobendDate: "",
		jobResponsibilities: "",
	});

	const [technicalSkills, settechnicalSkills] = useState([]);

	const handlePersonalFormDataChange = (newdata) => {
		setpersonalInfoData(newdata);
	};

	const addEducationInfoToList = (newdata) => {
		setEducationList([...educationDataList, newdata]);
	};

	const handleEducationFormDataChange = (newdata) => {
		seteducationInfoData(newdata);
	};

	const handleJobExperienceFormChange = (newdata) => {
		setjobExperienceData(newdata);
	};

	const addJobInfoToList = (newdata) => {
		setjobExperienceDataList([...jobExperienceDataList, newdata]);
	};

	const addSkillsToList = (newdata) => {
		settechnicalSkills([...technicalSkills, newdata]);
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
							educationInfoData={educationInfoData}
							onEducationInfoChange={handleEducationFormDataChange}
							addEducationDatToList={addEducationInfoToList}
							jobExperienceInfoData={jobExperienceData}
							onJobExperienceInfoChange={handleJobExperienceFormChange}
							addJobExperienceDataToList={addJobInfoToList}
							addSkillsToList={addSkillsToList}
						></CVForm>
					</div>
					<div className="right-side">
						<h3>{personalInfoData.Name + personalInfoData.phoneNumber}</h3>
						<h4>{console.log(educationDataList)}</h4>
						{console.log(technicalSkills)}
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
