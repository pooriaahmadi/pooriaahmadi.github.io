import "../static/postView.css";
import { useParams } from "react-router-dom";
import Back from "../components/Back";
const PostView = ({ posts }) => {
	const { uniqueName } = useParams();
	let post = posts.filter((post) => post.uniqueName === uniqueName);
	if (!post.length) {
		return <h1>Post not found.</h1>;
	}
	post = post[0];
	const date = new Date(post.createdDate);
	return (
		<div className="post-view">
			<Back home={true} />
			<div className="header">
				<div className="time">
					<h6>{date.toLocaleDateString()}</h6>
					<h6>{post.readTime} min read</h6>
				</div>
				<div className="title">
					<h1>{post.title}</h1>
					<p>{post.shortDescription}</p>
				</div>
			</div>
			<div
				className="content"
				dangerouslySetInnerHTML={{ __html: post.content }}
			></div>
		</div>
	);
};

export default PostView;
