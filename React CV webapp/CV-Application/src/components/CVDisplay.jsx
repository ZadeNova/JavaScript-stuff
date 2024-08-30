import { useState } from "react";
import "../css/main.css";
import PersonalInfo from "./PersonalInfo.jsx";

function displayCV(
    {
    personalInfoData,
    educationData,
    jobData,
    skillsData,
    }){



    return (
    <>

        <main className="displayCV">

        <section className="displayPersonalInfo">
            <h3>{personalInfoData.Name}</h3>

        </section>
        <section className="displayContactableInfo">

        </section>
        <section className="displayEducationBackground CVtitle">
            <h3>Education Background</h3>

            {
                educationData.map((education) => (
                    <>
                    <div className="education">
                        <div>
                            <h4 className="eduSchoolName">{education.schoolName}</h4>
                            <h4 className="eduQualification">{education.qualification}</h4>
                            
                        </div>
                        <div>
                            <h4>{education.startDate} to {education.endDate}</h4>
                        </div>



                    </div>

                    </>
                ))

            }



        </section>
        <section className="displayTechnicalSkills CVtitle">
            <h3>Technical Skills</h3>
        </section>
        <section className="displayWorkingExperience CVtitle">
            <h3>Working Experience</h3>
        </section>





        </main>
    
    
    </>
    
    )
}

export default displayCV;