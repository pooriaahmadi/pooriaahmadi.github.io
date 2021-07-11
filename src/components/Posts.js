import "../static/posts.css";
import Post from "./Post";
const Posts = ({ posts }) => {
	return (
		<div className="posts">
			<h1>{posts.length} POSTS</h1>
			{posts.map((post) => (
				<Post postObject={post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
