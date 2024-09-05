import { useState } from "react";
import "../css/card.css";

function cardDisplay({ pokemonName, pokemonImage, onClickFunction }) {
	return (
		<>
			<div
				className="memoryCard"
				onClick={(e) => onClickFunction(e)}
				data-pokemonName={pokemonName}
			>
				<img src={pokemonImage} style={{ width: "50%" }}></img>
				<div className="memoryCard-Container">
					<h4>{pokemonName}</h4>
				</div>
			</div>
		</>
	);
}

export default cardDisplay;
