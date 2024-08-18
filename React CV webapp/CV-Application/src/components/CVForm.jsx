import { useState } from "react";
import "../css/main.css";
import PersonalInfo from "./PersonalInfo.jsx";

function Form({
	personalInfoFormData,
	onPersonalInfoDataChange,
	educationInfoData,
	onEducationInfoChange,
	addEducationDataToList,
	jobExperienceInfoData,
	onJobExperienceInfoChange,
	addJobExperienceDataToList,
	addSkillsToList,
}) {
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("Form data submitted");
	// };

	// I need to write a function for every input to update state.

	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [phoneNumber, setphoneNumber] = useState("");

	const [schoolName, setSchoolName] = useState("");
	const [qualification, setQualification] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const [jobTitle, setjobTitle] = useState("");
	const [companyName, setcompanyName] = useState("");
	const [jobstartDate, setjobstartDate] = useState("");
	const [jobendDate, setjobendDate] = useState("");
	const [jobResponsibilities, setjobResponsibilities] = useState("");

	const [skills, setSkills] = useState("");

	const [isCheckedJob, setIsCheckedJob] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const handlefirstNameChange = (event) => {
		setfirstName(event.target.value);
	};

	const handlelastNameChange = (event) => {
		setlastName(event.target.value);
	};

	const handlePhoneNumChange = (event) => {
		setphoneNumber(event.target.value);
	};

	const handleSchoolNameChange = (event) => {
		setSchoolName(event.target.value);
	};

	const handleQualificationChange = (event) => {
		setQualification(event.target.value);
	};

	const handlestartDateChange = (event) => {
		setStartDate(event.target.value);
	};

	const handleendDateChange = (event) => {
		setEndDate(event.target.value);
	};

	const handlejobTitleChange = (event) => {
		setjobTitle(event.target.value);
	};

	const handleCompanyChange = (event) => {
		setcompanyName(event.target.value);
	};

	const handlejobstartDate = (event) => {
		setjobstartDate(event.target.value);
	};

	const handlejobendDate = (event) => {
		setjobendDate(event.target.value);
	};

	const handleJobResponsibilities = (event) => {
		setjobResponsibilities(event.target.value);
	};

	const handleSkillsChange = (event) => {
		setSkills(event.target.value);
	};

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const handleJobCheckboxChange = () => {
		setIsCheckedJob(!isCheckedJob);
	};

	const saveGeneralInformationData = () => {
		// Personal Info Data
		onPersonalInfoDataChange({
			...personalInfoFormData,
			Name: firstName + lastName,
			phoneNumber: phoneNumber,
		});
	};

	const saveEducationData = () => {
		onEducationInfoChange({
			...educationInfoData,
			schoolName: schoolName,
			qualification: qualification,
			startDate: startDate,
			endDate: endDate,
		});

		addEducationDataToList({
			schoolName: schoolName,
			qualification: qualification,
			startDate: startDate,
			endDate: endDate,
		});
	};

	const addJobResponsibilities = () => {
		onJobExperienceInfoChange({
			...jobExperienceInfoData,
			jobTitle: jobTitle,
			companyName: companyName,
			jobstartDate: jobstartDate,
			jobendDate: jobendDate,
			jobResponsibilities: jobResponsibilities,
		});

		addJobExperienceDataToList({
			jobTitle: jobTitle,
			companyName: companyName,
			jobstartDate: jobstartDate,
			jobendDate: jobendDate,
			jobResponsibilities: jobResponsibilities,
		});
	};

	const addSkills = () => {
		addSkillsToList(skills);
	};

	const sendJobData = () => {
		console.log();
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
				<label htmlFor="schoolName">University/Instituation/School</label>
				<input
					type="text"
					id="schoolName"
					name="schoolName"
					value={schoolName}
					onChange={handleSchoolNameChange}
				></input>

				<label htmlFor="certName">Program/Degree/Diploma/Course</label>
				<input
					type="text"
					id="certName"
					name="certName"
					value={qualification}
					onChange={handleQualificationChange}
				></input>

				<label htmlFor="startDate">Start Date</label>
				<input
					type="date"
					id="startDate"
					name="startDate"
					value={startDate}
					onChange={handlestartDateChange}
				></input>

				<label htmlFor="onGoing">On-Going</label>
				<input
					type="checkbox"
					id="onGoing"
					name="onGoing"
					checked={isChecked}
					onChange={handleCheckboxChange}
				></input>

				{isChecked === true && (
					<>
						<label htmlFor="endDate">End Date</label>
						<input
							type="date"
							id="endDate"
							name="endDate"
							value={endDate}
							onChange={handleendDateChange}
						></input>
					</>
				)}

				{/* /* Add a conditional statement to show end date if checkbox is not ticked. */}
				<button onClick={saveEducationData}>Save</button>
			</fieldset>
			<fieldset>
				<legend>Job Experience</legend>

				<label htmlFor="jobTitle">Title/Position</label>
				<input
					type="text"
					id="jobTitle"
					name="jobTitle"
					value={jobTitle}
					onChange={handlejobTitleChange}
				></input>

				<label htmlFor="companyName">Company/Organisation</label>
				<input
					type="text"
					id="companyName"
					name="companyName"
					value={companyName}
					onChange={handleCompanyChange}
				></input>

				<label htmlFor="jobstartDate">Starting Date</label>
				<input
					type="date"
					id="jobstartDate"
					name="jobstartDate"
					value={jobstartDate}
					onChange={handlejobstartDate}
				></input>

				<label htmlFor="onGoingJob">On-Going</label>
				<input
					type="checkbox"
					id="onGoingJob"
					name="onGoingJob"
					checked={isCheckedJob}
					onChange={handleJobCheckboxChange}
				></input>

				{isCheckedJob === true && (
					<>
						<label htmlFor="endDateJob">End Date</label>
						<input
							type="date"
							id="endDateJob"
							name="endDateJob"
							value={jobendDate}
							onChange={handlejobendDate}
						></input>
					</>
				)}

				<label htmlFor="jobResponsibilities">Job Responsibilities</label>
				<input
					type="text"
					id="jobResponsibilities"
					name="jobResponsibilities"
					value={jobResponsibilities}
					onChange={handleJobResponsibilities}
				></input>
				<button onClick={addJobResponsibilities}>Add</button>

				<button onClick={sendJobData}>Save</button>
			</fieldset>

			<fieldset>
				<legend>Technical Skills</legend>

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
