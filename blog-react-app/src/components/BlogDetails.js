import { useParams,useHistory } from "react-router-dom";
import useFetch from "./UseFetch" ;

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs/" + id);
  const history = useHistory();

  const HandleDelete = () =>{
     fetch("http://localhost:3000/blogs/" + blog.id, {
       method : 'DELETE'
     }).then(() => {
      history.push("/");
    });
  }
  return (
    <div className="content">
      <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article
            style={{
              border: "1px solid gainsboro",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "25vh",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src={blog.img}
              alt=""
            />
            <h2 style={{ display: "flex", padding: "30px  5px  0px 5px" }}>
              {blog.title}
            </h2>
            <h3 style={style.h2}>Blog Time : {blog.author}</h3>

            <p style={{ display: "flex", padding: "30px 5px" }}>{blog.body}</p>
            <a href={blog.link} target="_blank">
              Get Code
            </a>
            <button onClick={HandleDelete}>DELETE</button>
          </article>
          
        )}
      </div>
    </div>
  );
};
const style = {
  h2: {
    backgroundColor: "orangered",
    width: "220px",
    display: "flex",
    justifyContent: "center",
    padding: " 5px",
    marginTop: "25px",
    float: "right",
    borderRadius: "5px",
    color: "white",
    marginTop: "-5vh",
  },
};

export default BlogDetails;
