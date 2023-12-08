const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { v4: uuidv4 } = require("uuid");

const Blog = require("./Models/Blog");

mongoose
  .connect(
    "mongodb+srv://Admin:SK1Qw3JMmHwouem0@database.earmmfm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database successfully");
  });

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// get ข้อมูลทั้งหมด
app.get("/getall", (req, res) => {
  Blog.find().then((result) => res.json(result));
});
// create สร้างข้อมูล
app.post("/create", (req, res) => {
  const { title, content, image } = req.body;
  Blog.create({ blogID: uuidv4(), title: title, content, image }).then(() => {
    res.send("สร้างสำเร็จ");
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
