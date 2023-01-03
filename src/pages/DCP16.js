import Posts from "../components/Posts";
const DCP16 = (props) => {

  const filteredposts = props.posts.filter(post => {
    return post.title.toLowerCase().includes(props.search.toLowerCase())
      || post.body.toLowerCase().includes(props.search.toLowerCase());
  });

    return <Posts tag="dcp16" posts={filteredposts} />;
  };
  
  export default DCP16;