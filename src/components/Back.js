import { useLocation, Link } from "react-router-dom";

const Back = ({ home }) => {
	const location = useLocation();

	let path = "/";
	if (!home) {
		path = location.pathname.split("/");
		path = path
			.map((element, index) => {
				return index !== path.length - 1 ? element : "";
			})
			.join("/");
	}

	return (
		<Link to={path} className="back">
			<svg
				strokeWidth="0"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g>
					<path fill="none" d="M0 0h24v24H0z"></path>
					<path d="M12 13v7l-8-8 8-8v7h8v2z"></path>
				</g>
			</svg>
		</Link>
	);
};

export default Back;
