const mongoose = require("mongoose")
require("dotenv").config()

let { DBNAME, ATLASPASSWORD, ATLASUSERNAME } = process.env



const db = () => {

    mongoose.connect(`mongodb+srv://${ATLASUSERNAME}:${ATLASPASSWORD}@cluster0.zpootat.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=Cluster0`)
        .then(() => {
            console.log(`Atlas connection Successfully  👍 `)
        })
        .catch(() => {
            console.log(`Atlas connection errror 😑 `)
        })
}

module.exports = db