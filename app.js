console.log("ciao")
import express from "express"
const app = express();
const port = 3000;

import postBlog from "./models/post.js"

app.use(express.static("public"));
//  console.log(postBlog);
app.get(`/`, (req, res) => {
    res.send("hello world!")
})

app.get(`/bacheca`, (req, res) => {



    res.json(postBlog)
})


app.listen(port, () => {
    console.log("hello sono il server!")
})