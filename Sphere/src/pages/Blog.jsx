import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Blog.css";
import blogbg from "../img/blog_bg.jpg";
import icon from "../img/icon_rainy.png";
import icon_pencil from "../img/icon_pencil.png";
import axios from "axios";
import { Link } from "react-router-dom";
import keys from "../keys";

//calling API
const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  find: keys.FIND_L,
  weath: keys.WEATHER,
};

const Blog = () => {
  //use date
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };
  const [blog, setBlog] = useState([]);
  const [filtersearch, setFilterSearch] = useState("");
  const mewFilter = blog.filter((blog) => {
    if (filtersearch === "") {
      return blog;
    }
    return (
      blog.title.toLowerCase().includes(filtersearch.toLowerCase()) ||
      blog.author.toLowerCase().includes(filtersearch.toLowerCase())
    );
  });

  const fetchAPI = () => {
    axios.get("http://localhost:8080/getall").then((result) => {
      setBlog(result.data);
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  // Convert Kelvin to Celsius
  const [celsiusT, setCelsiusT] = useState("");
  useEffect(() => {
    const celsiusTemp = weather.main && weather.main.temp - 273.15;
    const roundedCel = Math.floor(celsiusTemp);
    setCelsiusT(roundedCel);
  }, []);

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.weath}weather?q=${query}&appid=${api.key}`)
        .then((res) => res.json())
        .then((results) => {
          setQuery("");
          setWeather(results);
          console.log(results);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="blog-header">
        {/* Blog Header */}
        <div className="blog-date">{dataBuild(new Date())}</div>
        <div className="blog-temp">{celsiusT}°</div>
        <div className="blog-location">
          {weather.name}, {weather.sys && weather.sys.country}
        </div>
        <div className="blog-search-container">
          <input
            type="text"
            placeholder="→ Searching here...."
            className="blog-serchbar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-anmew-content">
        <h1 className="text">Blog</h1>
        <div className="containermew">
          <input
            type="text"
            placeholder="search..."
            value={filtersearch}
            onChange={(e) => setFilterSearch(e.target.value)}
          />
          <Link to={"/writeblog"} className="writeblog">
            Write Blog
          </Link>
        </div>
        <div className="blog-grid">
          {mewFilter.map((item) => (
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
      </div>
    </>
  );
};

export default Blog;
