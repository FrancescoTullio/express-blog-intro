console.log("ciao")
const express = require("express");
const app = express();
const port = 3000;

// import postBlog from "./models/post.js"


// console.log(postBlog);
app.get(`/`, (req, res) => {
    console.log("hello world!")
})


app.listen(port, () => {
    console.log("hello sono il server!")
})