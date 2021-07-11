import "../static/MenuItem.css";
const MenuItem = ({ active, title, menuItemClick }) => {
	return (
		<div className={active ? "active" : ""} onClick={menuItemClick}>
			{title}
			<div></div>
		</div>
	);
};

export default MenuItem;
