import "../static/home.css";
import Bio from "../components/Bio";
import Menu from "../components/Menu";
const Home = ({ posts, menu, menuItemClick, projects, languages }) => {
	return (
		<div className="home">
			<Bio />
			<Menu
				menu={menu}
				menuItemClick={menuItemClick}
				posts={posts}
				projects={projects}
				languages={languages}
			/>
		</div>
	);
};

export default Home;
