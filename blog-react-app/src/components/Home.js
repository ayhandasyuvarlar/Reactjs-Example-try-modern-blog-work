
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
  const {data:blogs , isPending , error} = useFetch("http://localhost:3000/blogs")
  return (
    <div className="content">
      {error && <div>{error}</div>}
      {isPending && <div> Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs !"></BlogList>}
    </div>
  );
};

export default Home;

/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs !"
      ></BlogList> */
  //   const handleDelete = (id) => {
  //     let newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };