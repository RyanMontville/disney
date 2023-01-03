import React, { useState } from 'react';
import "./Posts.css";
import Post from "./Post";
import Pagination from "./Pagination";

const Posts = (props) => {
  const filteredposts = props.posts.filter(post => {
    return props.tag === "all" ? true : props.tag === post.tag;
  });
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of posts to be displayed on each page   
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Records to be displayed on the current page
  const currentPosts = filteredposts.slice(indexOfFirstPost, indexOfLastPost);
  const nPages = Math.ceil(filteredposts.length / postsPerPage)

  return (
    <div className="posts-container">
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPosts.map(post => (
        <Post post={post} />
      ))}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Posts;