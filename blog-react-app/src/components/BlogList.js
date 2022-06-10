import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list" style={{ padding: "15px 0px" }} >
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <img style={{ borderRadius: "10px" }} src={blog.img} alt="" />
            <div className="img-blog"></div>
            <h2>{blog.title}</h2>
            <p style={{ marginTop: "25px" }}>
              Blog Time :
              <span
                style={{
                  backgroundColor: "orangered",
                  padding: "5px",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {blog.author}
              </span>
            </p>
            <p
              className="uc-nokta"
              style={{ width: "70%", padding: "20px 0px" }}
            >
              {blog.body}
            </p>
            <Link
              style={{
                float: "right",
                background: "#CD6155",
                padding: "8px",
                color: "white",
                borderRadius: "5px",
              }}
              to={`/blogs/${blog.id}`}
            >
              Read Me
            </Link>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
