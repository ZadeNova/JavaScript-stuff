async function getWeatherLocation() {
	const inputLocation = document.getElementById("locationInput").value;

	const response = await fetch(
		`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputLocation}?unitGroup=metric&include=current&key=7GQPKGXS3FT9P8TQP3V2UTG3W&contentType=json`,
		{ mode: `cors` }
	);
	const data = await response.json();

	console.log(data);
	displayData(data);
}

function displayData(weatherData) {
	// Clear data before generating a new div.
	const element = document.getElementsByClassName("weatherCard");
	if (element.length !== 0) {
		element[0].remove();
	}

	const contentDiv = document.getElementsByClassName("content")[0];

	const newDiv = document.createElement("div");
	newDiv.className = "weatherCard";
	newDiv.innerHTML = `
    <h3>${weatherData.address}</h3>
    
    <div class="innerCardContent">
    <div>
    <h4>Temperature</h4>
    <p>${weatherData.currentConditions.temp}</p>
    </div>
    <div>
    <h4>Humidity</h4>
    <p>${weatherData.currentConditions.humidity}</p>
    </div>
    <div>
    <h4>Conditions</h4>
    <p>${weatherData.currentConditions.conditions}</p>
    </div>
    </div>
    `;

	contentDiv.appendChild(newDiv);
}

// Its a basic barebones web app. There can be lots of improvements that can be added if desired.
