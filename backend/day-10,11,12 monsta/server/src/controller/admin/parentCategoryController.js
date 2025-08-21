
const addParentCategory = async (req, res) => {
    try {

        console.log(req.body)
        console.log(req.files)

        res.status(200).json({ message: "Category add Successfully...." })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports={
    addParentCategory
}