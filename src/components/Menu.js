import "../static/menu.css";
import MenuItem from "./MenuItem";
import Posts from "./Posts";
import Projects from "./Projects";

const Menu = ({ posts, menu, menuItemClick, projects }) => {
	const showContext = () => {
		if (menu === "posts") {
			return <Posts posts={posts} />;
		} else if (menu === "projects") {
			return <Projects projects={projects} />;
		}
	};
	return (
		<div className="right">
			<div className="menu">
				<MenuItem active={true} title="Posts" menuItemClick={menuItemClick} />
				<MenuItem
					active={false}
					title="Projects"
					menuItemClick={menuItemClick}
				/>
			</div>
			{showContext()}
		</div>
	);
};

export default Menu;
