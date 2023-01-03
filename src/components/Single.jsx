import React from "react";
import "./Post.css";
const Post = ({ post: { url,title,date,badge, body, images } }) => {
    return (
        <div className="post-container">
            <section className="post-header">
                <div>
                    <img src={ badge } class="badge" alt="badge" />
                </div>
                <div className="post-title">
                    <h2>{title}</h2>
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