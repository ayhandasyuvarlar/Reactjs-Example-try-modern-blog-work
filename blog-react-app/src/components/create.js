import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./UseFetch";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [img, setImg] = useState("");
  const [isPendingg, setIspendingg] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, link, img };
    setIspendingg(true);
    fetch("http://localhost:3000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIspendingg(false);
      history.push("/");
    });
  };
  return (
    <div className="content">
      <div className="create">
        <h2>Create</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Blog title :</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <label htmlFor="title">Blog body :</label>
          <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label htmlFor="title">Blog Time</label>
          <input
            type="date"
            required
            placeholder="01.01.2022"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <label htmlFor="title">Blog add link</label>
          <input
            type="text"
            required
            placeholder="https://www.example.com"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          ></input>
          <label htmlFor="title">Blog add img</label>
          <input
            type="text"
            required
            placeholder="https://www.example.com"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          ></input>
          {!isPendingg && <button>Add Blog</button>}
          {isPendingg && <button disabled>Adding Blog...</button>}
        </form>
      </div>
      <div
        className="blog-details"
        style={{
          marginTop: "5vh",
          border: "1px solid gray",
          padding: "30px",
          borderRadius: "5px",
          overflow:"hidden"
        }}
      >
        <article>
          <img
            style={{
              width: "100%",
              height: "25vh",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={img}
            alt=""
          />
          <h2>{title}</h2>
          <h4 style={{ paddingBottom: "25px" }}>Blog Time : {author}</h4>
          <p style={{width:"25vh",paddingBottom:"55px"}} className="helloname">{body}</p>
          <a href={link} target="_blank">
            Get Code
          </a>
        </article>
      </div>
    </div>
  );
};
const style = {
  p:{
    width:"10vh",
    paddingBottom:"25px"
  }
}

export default Create;
