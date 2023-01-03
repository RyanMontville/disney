import Posts from "../components/Posts";
const DCP15 = (props) => {

  const filteredposts = props.posts.filter(post => {
    return post.title.toLowerCase().includes(props.search.toLowerCase())
      || post.body.toLowerCase().includes(props.search.toLowerCase());
  });

    return <Posts tag="dcp15" posts={filteredposts} />;
  };
  
  export default DCP15;