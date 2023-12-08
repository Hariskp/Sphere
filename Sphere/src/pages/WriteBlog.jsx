import Header from "../components/Header";
import "./Writeblog.css";
import { useState } from "react";
import axios from "axios";

const WriteBlog = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const createBlog = async () => {
    await axios
      .post("http://localhost:8080/create", {
        title,
        author,
        content,
        image,
      })
      .then(() => alert("Success"))
      .then(() => window.location.replace("/Blog"));
  };
  return (
    <div>
      <Header />
      <div className="writeblog-container">
        <h2>Write Blog</h2>
        <div className="input-con">
          <label className="title">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="input-con">
          <label className="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="input-con">
          <label className="title">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="input-con">
          <label className="title">Content</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button onClick={createBlog}>Add post</button>
      </div>
    </div>
  );
};

export default WriteBlog;
