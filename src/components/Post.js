import "../static/post.css";
import { Link } from "react-router-dom";

const Post = ({ postObject }) => {
	const date = new Date(postObject.createdDate);
	return (
		<Link className="post" to={`/posts/${postObject.uniqueName}`}>
			<div className="header">
				<h6>{date.toLocaleDateString()}</h6>
				<h6>{postObject.readTime} min read</h6>
			</div>
			<h1>{postObject.title}</h1>
			<p>{postObject.shortDescription}</p>
		</Link>
	);
};

export default Post;
