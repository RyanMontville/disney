import React from 'react';
import Posts from "../components/Posts";
const Home = (props) => {

  const filteredposts = props.posts.filter(post => {
    return post.title.toLowerCase().includes(props.search.toLowerCase())
      || post.body.toLowerCase().includes(props.search.toLowerCase());
  });


  return <div>
    <Posts tag="all" posts={filteredposts} />
  </div>;
};

export default Home;