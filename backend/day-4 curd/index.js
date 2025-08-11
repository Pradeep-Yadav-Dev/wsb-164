const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.urlencoded())

app.get("/view", (req, res) => {
    // console.log(req.query)
    res.send("data view....")
})

app.post("/insert/:slug", (req, res) => {

    console.log(req.params)
    res.send("data post....")
})
app.post("/form", (req, res) => {

    console.log(req.body)
    res.send("data post....")
})

app.put("/update", (req, res) => {
    res.send("data update....")
})

app.delete("/delete", (req, res) => {
    res.send("data delete....")
})

app.listen(process.env.PORT, () => {
    console.log(`server run on ${process.env.PORT}`)
})