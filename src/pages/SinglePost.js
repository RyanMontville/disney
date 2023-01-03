import Single from "../components/Single";
import { useParams } from "react-router-dom";
const SinglePost = (props) => {
    const params = useParams();
    const currentPost = props.posts.filter(post => {
        return post.url === params.id;
    });
    return (
        <div className="posts-container">
          {currentPost.map(post => (
            <Single post={post} />
          ))}
        </div>
      );
  };
  
  export default SinglePost;