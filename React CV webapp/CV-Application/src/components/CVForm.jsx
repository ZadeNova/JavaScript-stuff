import { useState } from "react";
import "../css/main.css";

function Form() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form data submitted");
	};
	return (
		<>
			<h1>CV Form</h1>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>General Information</legend>
					<label htmlFor="firstName">First Name:</label>

					<input type="text" id="firstName" name="firstName"></input>
					<br></br>
					<label htmlFor="lastName">Last Name:</label>

					<input type="text" id="lastName" name="lastName"></input>
				</fieldset>
			</form>
		</>
	);
}

export default Form;
