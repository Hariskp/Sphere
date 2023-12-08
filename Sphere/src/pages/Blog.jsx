import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Blog.css";
import blogbg from "../img/blog_bg.jpg";
import icon from "../img/icon_rainy.png";
import icon_pencil from "../img/icon_pencil.png";
import axios from "axios";

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
      <div className="blog-content">
        <div className="blog-content-header">
          <h1>Blog</h1>
          <div className="write-blog">
            <input
              type="text"
              placeholder="Write Blog Here..."
              className="write-b"
            />
            <button className="writeblog">Write Blog</button>
          </div>
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
