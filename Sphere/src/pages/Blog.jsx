import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Blog.css";
import blogbg from "../img/blog_bg.jpg";
import icon from "../img/icon_rainy.png";
import icon_pencil from "../img/icon_pencil.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const fetchAPI = () => {
    axios.get("http://localhost:8080/getall").then((result) => {
      setBlog(result.data);
    });
  };

  useEffect(() => {
    fetchAPI();
  });

  return (
    <>
      <Header />
      <div className="blog-header">
        {/* Blog Header */}
        <div className="blog-date">Fri 2 Dec 23</div>
        <div className="blog-temp">
          30°
          <img src={icon} alt="icon" />
        </div>
        <div className="blog-location">Bangkok, Thailand</div>
        <div className="blog-search-container">
          <input
            type="text"
            placeholder="→ Searching here...."
            className="blog-serchbar"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-anmew-content">
        <h1 className="text">Blog</h1>
        <div className="containermew">
          <input type="text" placeholder="search..." />
          <Link to={"/writeblog"} className="writeblog">
            Write Blog
          </Link>
        </div>
        <div className="blog-grid">
          {blog.map((item) => (
            <div key={item.blogID} className="content">
              <img
                src={item.image}
                alt="image"
                className="mb-2"
                style={{ height: "200px" }}
              />
              <p className="mb-1">
                <span>Author </span> : {item.author}
              </p>
              <p className="mb-1">
                <span>Topic </span> : {item.title}
              </p>
              <p>{item.content.slice(0, 40)}</p>
            </div>
          ))}
        </div>
        <div className="blog-container">
          {blog.map((item) => (
            <div key={item.blogID}>
              <img src={item.image} alt="" style={{ width: "40%" }} />
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
