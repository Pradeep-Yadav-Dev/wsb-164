const express = require("express")
const app = express()
require("dotenv").config()
const { MongoClient } = require('mongodb');
const path = require("path")

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const multer = require('multer')



app.use(express.urlencoded())
app.use(express.json())

app.use("/upload" ,express.static(path.join(__dirname , "uploads")))

const filePath="http://localhost:5500/upload/"

// Database Name
const dbName = 'wsb-164-db';

const db_config = async () => {
    await client.connect()
    console.log('Connected successfully to server');
    return client.db(dbName)
}

const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, "uploads")
    },
    filename: function (req, file, next) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9 )
        next(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })


app.post("/insert", upload.single("img"), async (req, res) => {
    let db = await db_config()
    let insertCollection = db.collection("user_data")

    // console.log(req.body)
    // console.log(req.file)

    let userObj = {
        name: req.body.name,
        location: req.body.location,
        img: req.file.filename
    }

    let response = await insertCollection.insertOne(userObj)

    res.json({ message: "insert data successfully", response })
})



app.get("/view", async (req, res) => {
    let db = await db_config()
    let data = await db.collection("user_data").find().toArray()

    res.json({ message: "view data successfully", data , filePath })
})





app.listen(process.env.PORT, () => {
    console.log(`port on ${process.env.PORT}`)
})