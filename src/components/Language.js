import "../static/language.css";
import { Link } from "react-router-dom";

const Language = ({ languageObject }) => {
	return (
		<div className="language">
			<div className="header">
				<h1>{languageObject.title}</h1>
				<h1>{languageObject.rate}</h1>
			</div>
			<div className="bar">
				<div
					style={{
						width: languageObject.rate,
					}}
				></div>
			</div>
		</div>
	);
};

export default Language;
