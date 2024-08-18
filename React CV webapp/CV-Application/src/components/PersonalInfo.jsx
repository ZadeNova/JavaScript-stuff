import { useState } from "react";
import "../css/main.css";


function personalInfo({ name , phoneNumber}) {

    return (
    
    <>
        <h2 style={{textAlign: "center"}}>{name}</h2>
        <p>Phone Number: {phoneNumber}</p>

    
    
    </>
    )
}

export default personalInfo;