const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const productThunk=createAsyncThunk(
    "product/view",
    async()=>{
        try{
            let response=await axios.get("https://dummyjson.com/products")
            return response.data.products

        }
        catch(error){
            console.error(error)
        }

    }
)