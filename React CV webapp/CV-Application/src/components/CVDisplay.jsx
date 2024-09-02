import { useState } from "react";
import "../css/main.css";
import PersonalInfo from "./PersonalInfo.jsx";

function displayCV({ personalInfoData, educationData, jobData, skillsData }) {
	return (
		<>
			<main className="displayCV">
				<section className="displayPersonalInfo">
					<h3>{personalInfoData.Name}</h3>
					<h4>{personalInfoData.professionalTitle}</h4>
				</section>

				<section className="displayContactableInfo">
					<h4>Phone Number: {personalInfoData.phoneNumber}</h4>
					<h4>Email: {personalInfoData.Email}</h4>
					<h4>Personal Website: {personalInfoData.website_link}</h4>
				</section>

				<section className="displayEducationBackground CVtitle">
					<h3>Education Background</h3>
					{console.log(educationData)}
					{educationData.map((education) => (
						<>
							<div className="education" key={education.id}>
								<div>
									<h4 className="eduSchoolName">{education.schoolName}</h4>
									<h4 className="eduQualification">
										{education.qualification}
									</h4>
								</div>
								<div>
									<h4>
										{education.startDate} to {education.endDate}
									</h4>
								</div>
							</div>
						</>
					))}
				</section>
				<section className="displayTechnicalSkills CVtitle">
					<h3>Technical Skills</h3>
					{skillsData.map((skill) => (
						<>
							<div className="skills">
								<h4>{skill.skill}</h4>
							</div>
						</>
					))}
				</section>
				<section className="displayWorkingExperience CVtitle">
					<h3>Working Experience</h3>
					{jobData.map((jobexp) => (
						<>
							<div className="job-experience">
								<div>
									<h4 className="jobExp">{jobexp.companyName}</h4>
									<h4 className="jobExpTitle">{jobexp.jobTitle}</h4>
								</div>
								<div>
									<h4>
										{jobexp.jobStartDate} to {jobexp.jobEndDate}
									</h4>
								</div>
							</div>
						</>
					))}
				</section>
			</main>
		</>
	);
}

export default displayCV;
