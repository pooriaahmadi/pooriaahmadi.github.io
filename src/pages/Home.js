import "../static/home.css";
import Bio from "../components/Bio";
import Menu from "../components/Menu";
const Home = ({ posts, menu, menuItemClick, projects }) => {
	return (
		<div className="home">
			<Bio />
			<Menu
				menu={menu}
				menuItemClick={menuItemClick}
				posts={posts}
				projects={projects}
			/>
		</div>
	);
};

export default Home;
