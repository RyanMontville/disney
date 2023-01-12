import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
const Post = ({ post: { url,title,date,badge, body, images } }) => {
    return (
        <div className="post-container">
            <section className="post-header">
                <div>
                <Link to={`/${url}`}><img src={ badge } class="badge" alt="badge" /></Link>
                </div>
                <div className="post-title">
                    <h2><Link to={`/${url}`}>{title}</Link></h2>
                    <hr />
                    <h2>{date}</h2>
                </div>
            </section>
            <NewlineText text={body} />
            <section className="gallery-container">
            {images.map((data, index) => (
                <a href={data.src} data-lightbox={title} data-title={data.caption}><img src={data.src} alt="" className={data.class}/></a>
            ))}
            </section>
        </div>
    );
};

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }

export default Post;