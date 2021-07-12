import "../static/Languages.css";
import Language from "./Language";
const Languages = ({ languages }) => {
	return (
		<div className="languages">
			<h1>{languages.length} LANGUAGES</h1>
			{languages.map((element) => (
				<Language languageObject={element} key={element.id} />
			))}
		</div>
	);
};

export default Languages;
