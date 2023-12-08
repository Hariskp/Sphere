import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const fetchAPI = () => {
    axios.get("http://localhost:8080/getall").then((result) => {
      setBlog(result.data);
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="blog-container">
      {blog.map((item) => (
        <div key={item.blogID}>
          <img src={item.image} alt="" style={{ width: "40%" }} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
