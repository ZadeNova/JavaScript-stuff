import { useState } from "react";
import "../css/main.css";
import displayDetailsInForm from "./DisplayDetails";
import { v4 as uuid } from "uuid";


function Form({
	personalInfoFormData,
	onPersonalInfoDataChange,
	onEducationInfoChange,
	appState_educationInfoData,
	appState_jobExperienceInfoData,
	onJobExperienceInfoChange,
	onSkillInfoChange,
	addSkillsToList,
	educationList,
	jobExperienceList,
	skillInfoData,
	skillsList,
	deleteEducation,
	deleteJobExperience,
	deleteSkills
}) {
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("Form data submitted");
	// };

	// Now add delete function for technical skills.
	// After that add edit function for job exp , tech skills and , education exp.
	// After that add DISPLAY CV SITE

	// Finish up job experience. Follow same as edu experience

	const [educationInfoData, seteducationInfoData] = useState([]);

	const [jobExperienceInfoData , setJobExperienceInfoData] = useState([]);

	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [phoneNumber, setphoneNumber] = useState("");


	// const [jobTitle, setjobTitle] = useState("");
	// const [companyName, setcompanyName] = useState("");
	// const [jobstartDate, setjobstartDate] = useState("");
	// const [jobendDate, setjobendDate] = useState("");
	// const [jobResponsibilities, setjobResponsibilities] = useState("");

	const [skills, setSkills] = useState("");

	const addEducation = () => {

		if (educationInfoData.length < 3){

			const newEduExperience = {
				id: Date.now().toString(),
				schoolName: "",
				qualification: "",
				startDate: "",
				endDate: "",
	
	
			}
	
			seteducationInfoData([...educationInfoData, newEduExperience])
		}
		else{
			alert("Cant have more than 3 educations")
		}
		
	}

	const addJobExperience = () => {
		if (jobExperienceInfoData.length < 5){
			

			const newJobExperience = {
				id: Date.now().toString(),
				jobTitle:"",
				companyName: "",
				jobStartDate: "",
				jobEndDate: "",
				jobResponsibilities: "",

			}

			setJobExperienceInfoData([...jobExperienceInfoData, newJobExperience])
		}

		else{
			alert('Too much jobs')
		}
	}

	const handlefirstNameChange = (event) => {
		setfirstName(event.target.value);
	};

	const handlelastNameChange = (event) => {
		setlastName(event.target.value);
	};

	const handlePhoneNumChange = (event) => {
		setphoneNumber(event.target.value);
	};

	
	const handleSkillsChange = (event) => {
		setSkills(event.target.value);
	};

	const handleEduChange = (id , event) =>{
		const { name , value} = event.target;
		
		

		seteducationInfoData((prevEduExperiences) =>
			prevEduExperiences.map((experience) => 
				experience.id === id ? { ...experience, [name]: value,
				} : experience
			)
		)
	
		
	}

	const handleJobChange = (id , event) => {
		const {name , value} = event.target;

		setJobExperienceInfoData((jobExp) => jobExp.map((exp) => exp.id === id ? {...exp, [name]: value, } : exp))
	}


	const saveGeneralInformationData = () => {
		// Personal Info Data
		onPersonalInfoDataChange({
			...personalInfoFormData,
			Name: firstName + lastName,
			phoneNumber: phoneNumber,
		});
	};

	const saveEducationData = (id) => {

		// There is app state data and CV form state data.
		// App state data will be the main data.
		// CV form data is used for handling form changes.
		// This function exists for the 'save' button. This save button will allow the CV form data to go into App state data.
		// There is an if statement to determine if its an update or an addition.

		// If the ID exists , it will proceed to the update path. Else it will go to the addition path.
		if (appState_educationInfoData.some(education => education.id === id)){
			// Write the edit logic here
			console.log('edit logic')
			
			appState_educationInfoData = appState_educationInfoData.map(app_Edu => {
				const matchingEdu = educationInfoData.find(edu => edu.id === id);
				return matchingEdu ? {...app_Edu, ...matchingEdu} : app_Edu
			})
			console.log(appState_educationInfoData)

			onEducationInfoChange(appState_educationInfoData.find(education => education.id === id))
		}
		else{
			onEducationInfoChange(educationInfoData.find(education => education.id === id ))
		}
		
		//onEducationInfoChange(educationInfoData)
		
	
	};

	const addJobResponsibilities = () => {
		onJobExperienceInfoChange({
			...jobExperienceInfoData,
			id: uuid(),
			jobTitle: jobTitle,
			companyName: companyName,
			jobstartDate: jobstartDate,
			jobendDate: jobendDate,
			jobResponsibilities: jobResponsibilities,
		});

		addJobExperienceDataToList({
			...jobExperienceInfoData,
			id: uuid(),
			jobTitle: jobTitle,
			companyName: companyName,
			jobstartDate: jobstartDate,
			jobendDate: jobendDate,
			jobResponsibilities: jobResponsibilities,
		});
	};

	const addSkills = () => {

		onSkillInfoChange({...skillInfoData,
			id: uuid(),
			skill:skills,
		})

		addSkillsToList({...skillInfoData,
			id: uuid(),
			skill:skills,
		})
	};


	return (
		<>
			<h1 style={{ textAlign: "center" }}>CV Form</h1>

			<fieldset>
				<legend>General Information</legend>
				<label htmlFor="firstName">First Name:</label>

				<input
					type="text"
					id="firstName"
					name="firstName"
					value={firstName}
					onChange={handlefirstNameChange}
				></input>
				<br></br>
				<label htmlFor="lastName">Last Name:</label>

				<input
					type="text"
					id="lastName"
					name="lastName"
					value={lastName}
					onChange={handlelastNameChange}
				></input>

				<label htmlFor="phoneNum">Phone Number</label>
				<input
					type="text"
					id="phoneNum"
					name="phoneNum"
					value={phoneNumber}
					onChange={handlePhoneNumChange}
				></input>

				<button onClick={saveGeneralInformationData}>Save</button>
			</fieldset>

			<fieldset>
				<legend>Education</legend>


				<div>
					{/* {console.log(appState_educationInfoData)}
					{appState_educationInfoData.map((education) => 
					
					<>
					
						<li key={education.id}>{education.schoolName}</li>
						<button>Edit</button>
						<button>Delete</button>
					
					
					
					
					</>
				
				
				)}
					 */}
					
					
				
				
					
			
				</div>

				<hr></hr>
				<div>
					<button onClick={addEducation}>Add Education</button>
					{educationInfoData.map((experience) => (
						<div key={experience.id}>
							<label>School Name/Organisation</label>
							<input type="text" name="schoolName" placeholder="School Name" value={experience.schoolName} onChange={(e) => handleEduChange(experience.id, e)}></input>

							<label>Qualification</label>
							<input type="text" name="qualification" placeholder="Qualification Diploma/Degree/Cert" value={experience.qualification} onChange={(e) => handleEduChange(experience.id, e)}></input>
							<label>Start Date</label>
							<input type="date" name="startDate" value={experience.startDate} onChange={(e) => handleEduChange(experience.id, e)}></input>
							<label>End Date</label>
							<input type="date" name="endDate" value={experience.endDate} onChange={(e) => handleEduChange(experience.id,e)}></input>


							<button onClick={() => saveEducationData(experience.id)}>Save</button>

						</div>


					
					))}


				</div>
				
				

				
			</fieldset>
			<fieldset>
				<legend>Job Experience</legend>
				
				<div>
				
				</div>
				<button onClick={addJobExperience}>Add Job Experience</button>
				{
					jobExperienceInfoData.map((jobexperience) => (
						<div key={jobexperience.id}>
							<label>Job Title</label>
							<input type="text" name="jobTitle" placeholder="Senior Manager" value={jobexperience.jobTitle} onChange={(e) => handleJobChange(jobexperience.id, e)}></input>
							<label>Company Name/Organisation Name</label>
							<input type="text" name="companyName" placeholder="Facebook" value={jobexperience.companyName} onChange={(e) => handleJobChange(jobexperience.id , e)}></input>
							<label>Job Start Date</label>
							<input type="date" name="jobStartDate" value={jobexperience.jobStartDate} onChange={(e) => handleJobChange(jobexperience.id , e)}></input>
							<label>Job End Date</label>
							<input type="date" name="jobEndDate" value={jobexperience.jobEndDate} onChange={(e) => handleJobChange(jobexperience.id , e)}></input>
							<label>Job Responsibilities</label>
							<input type="text" name="jobResponsibilities" placeholder="Job Responsibilities" value={jobexperience.jobResponsibilities} onChange={(e) => handleJobChange(jobexperience.id, e)}></input>

							<button onClick={addJobResponsibilities}>Save</button>
						</div>
					))
				}

				
				

				<button>Save</button>
			</fieldset>

			<fieldset>
				<legend>Technical Skills</legend>
				

				<div>

					{
					skillsList.map((skill) =>
						<>
						<li key={skill.id}>{skill.skill}</li>
						<button>Edit</button>
						<button onClick={() => deleteSkills(skill.id)}>Delete</button>
						{console.log(skillsList)}
						</>
						
					
					
					)}
					
				</div>

				<label htmlFor="skills">Skills</label>
				<input
					type="text"
					id="skills"
					name="skills"
					value={skills}
					onChange={handleSkillsChange}
				></input>

				<button onClick={addSkills}>Add</button>
			</fieldset>
		</>
	);
}

export default Form;
