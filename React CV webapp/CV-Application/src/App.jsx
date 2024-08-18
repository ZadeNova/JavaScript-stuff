import { useState } from "react";
import "./css/main.css";
import CVForm from "./components/CVForm.jsx";
import CVDisplay from "./components/CVDisplay.jsx";

function App() {
	//const [count, setCount] = useState(0);

	const [personalInfoData , setpersonalInfoData] = useState({
		Name: '',
		phoneNumber: '',
	});

	const [educationInfoData , seteducationInfoData] = useState({
		
	})

	const handlePersonalFormDataChange = (newdata) => {
		setpersonalInfoData(newdata)
	}

	return (
		<>
			<div className="content">
				<h1 className="AppTitle">CV Application</h1>
				<div className="container">
					<div className="left-side">
						<CVForm onPersonalInfoDataChange={handlePersonalFormDataChange} personalInfoFormData={personalInfoData}></CVForm>

					</div>
					<div className="right-side">
						
						<h3>{personalInfoData.Name + personalInfoData.phoneNumber}</h3>
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
