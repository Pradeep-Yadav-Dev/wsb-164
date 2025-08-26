import React, { useEffect, useState } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import Breadcrumb from "../../common/Breadcrumb";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AddSubSubCategory() {
  useEffect(() => {
    $(".dropify").dropify({
      messages: {
        default: "Drag and drop ",
        replace: "Drag and drop ",
        remove: "Remove",
        error: "Oops, something went wrong"
      }
    });
  }, []);
  
 

  // get parentCategory
  const [storeParentCat, setStoreParentCat] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}sub-sub-category/active-parent-category`)
      .then((ress) => {
        setStoreParentCat(ress.data.data)
      })
  },[])

  // get sub category   active-sub-category/:_id
  const [parentCatId,setParentCatId]=useState("")
  const [storeSubCat, setStoreSubCat] = useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}sub-sub-category/active-sub-category/${parentCatId}`)
      .then((ress) => {
        // setStoreParentCat(ress.data.data)
        setStoreSubCat(ress.data.data)
      })
  },[parentCatId])

  // saveForm
  let saveForm = (e) => {
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_API_URL}sub-sub-category/add`, e.target)
      .then((ress) => {
        alert(ress.data.message)
      })
      .catch((error) => {
        console.error(error)
      })
  }

 

  return (
    <section className="w-full">
      <Breadcrumb path={"Sub Category"} path2={"Add Sub Category"} slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Sub Sub Category
          </h3>
          <form onSubmit={saveForm}  className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="flex gap-5">
              <div className="w-1/3">
                <label
                  htmlFor="categoryImage"
                  className="block  text-md font-medium text-gray-900"
                >
                  Category Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                 
                  id="categoryImage"
                  className="dropify"
                  data-height="260"
                  name="subSubCategoryImage"
                />
               
              </div>

              <div className="w-2/3">
                
                {/* Parent Category Dropdown */}
                <div className="mb-5">
                  <label className="block mb-5 text-md font-medium text-gray-900">
                    Parent Category Name
                  </label>
                  <select
                    name="parentCategory"
                    className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    onChange={(e)=>setParentCatId(e.target.value)}
                  >
                    <option value="">Select Category</option>

                    {storeParentCat?.map((v)=>{
                      return(
                         <>
                          <option value={v._id}> {v.parentCategoryName} </option>
                         </>
                      )
                    })}
                  
                    
                  </select>
                </div>
                {/* Parent Category Dropdown */}
                <div className="mb-5">
                  <label className="block mb-5 text-md font-medium text-gray-900">
                    Sub Category Name
                  </label>
                  <select
                    name="subCategory"
                    className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option value="">Select Category</option>
                     {storeSubCat?.map((v)=>{
                      return(
                           <option value={v._id}> {v.subCategoryName} </option>
                      )
                     })}
                  </select>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="categoryName"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                 
                    id="categoryName"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Category Name"
                    name="subSubCategoryName"
                  />
                 
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="order"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Order
                  </label>
                  <input
                    type="number"
                    
                    id="order"
                    name="order"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Order"
                  />
                 
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="order"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                  
                  
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Slug"
                  />
                 
                </div>

              </div>
            </div>
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
            Add Sub Category
            </button>
          </form>


        </div>
      </div>
    </section>
  );
}
