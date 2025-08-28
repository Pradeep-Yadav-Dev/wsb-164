import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {

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

  const [value, setValue] = useState('');

  // get active color
  const [storeColor, setStoreColor] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}product/active-color`)
      .then((ress) => {
        setStoreColor(ress.data.data)
      })
  },[])

  // get material 
  const [storeMaterial, setStoreMaterial] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}product/active-material`)
      .then((ress) => {
        setStoreMaterial(ress.data.data)
      })
  },[])

  // get active parent category 
  const [storeParentCategory, setStoreParentCategory] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}product/active-parent-category`)
      .then((ress) => {
        setStoreParentCategory(ress.data.data)
      })
  },[])

  // get sub category
  const [parentCatId,setParentCatId]=useState("")
  const [storeSubCategory, setStoreSubCategory] = useState([])
    useEffect(()=>{ 
      
        axios.get(`${import.meta.env.VITE_API_URL}product/active-sub-category/${parentCatId}`)
          .then((ress) => {
            setStoreSubCategory(ress.data.data)
          })
      
    },[parentCatId])

  // /active-sub-sub-category/:_id
  const [subCatID,setSubCatID]=useState("")
  const [storeSubSubCategory, setStoreSubSubCategory] = useState([])
    useEffect(()=>{ 

        axios.get(`${import.meta.env.VITE_API_URL}product/active-sub-sub-category/${subCatID}`)
          .then((ress) => {
            setStoreSubSubCategory(ress.data.data)
          })
      
    },[subCatID])


    // saveForm
    let saveForm=(e)=>{
      e.preventDefault();
      let productForm=new FormData(e.target)
      productForm.append("description",value)

      axios.post(`${import.meta.env.VITE_API_URL}product/add`, productForm)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.error(err);
        });
    }

  return (
    <section className="w-full">

      <nav className="flex border-b-2" aria-label="Breadcrumb">
        <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center ">
            <Link to={"/home"} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link to={"/product/view"} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Product</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">Add</span>
            </div>
          </li>
        </ol>
      </nav>



      <div className='w-full px-6 py-6  '>

        <form onSubmit={saveForm} >
          <div className="grid grid-cols-3 gap-[10px] ">
            {/* for left */}
            <div className="for-images ">

              <div className="">
                <label
                  htmlFor="ProductImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="ProductImage"
                  className="dropify"
                  data-height="160"
                  name='productImage'
                />
               

              </div>

              <div className="">
                <label
                  htmlFor="backImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Back Image
                </label>
                <input
                  type="file"
                  id="backImage"
                  className="dropify"
                  data-height="160"
                name='backImage'
                />
                
              </div>

              <div className="">
                <label
                  htmlFor="GalleryImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Gallery Image
                </label>
                <input
                  type="file"
                  id="GalleryImage"
                  className="dropify"
                  data-height="160"
                  name='galleryImage'
                  multiple
                />
              
              </div>
            </div>

            {/* for midd */}
            <div className="middle">

              <div className="mb-5">
                <label
                  htmlFor="Prodct_Name"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Prodct Name
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Prodct Name'
                 name='productName'
                />
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Category
                </label>
                <select
                  name='subCategory'
                  onChange={(e)=>setSubCatID(e.target.value)}
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Select Category</option>
                  
                  {storeSubCategory?.map((v)=>{
                    return(
                      <option key={v._id} value={v._id}>{v.subCategoryName}</option>
                    )
                  })}

                </select>
                

              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Meterial
                </label>
                <select
                  name='material'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  {storeMaterial?.map((v)=>{
                    return(
                      <option key={v._id} value={v._id}>{v.materialName}</option>
                    )
                  })}

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Prodcut Type
                </label>
                <select
                name='productType'
                 
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="Featured">Featured</option>
                  <option value="New Arrivals">New Arrivals</option>
                  <option value="Onsale">Onsale</option>


                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Top Rated
                </label>
                <select
                  name='topRated'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>

                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Actual Price
                </label>
                <input
                  type="number"
                  name='actualPrice'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Actual Price'
                />
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Total In Stocks
                </label>
                <input
                  type="text"
                  name='stocks'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Total In Stocks'
                />
                
              </div>



            </div>

            {/* for right */}
            <div className="right-items">
              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Parent Category
                </label>
                <select
                  name='parentCategory'
                  onChange={(e)=>setParentCatId(e.target.value)}
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  {storeParentCategory?.map((v) => {
                    return (
                      <option key={v._id} value={v._id}>{v.parentCategoryName}</option>
                    )
                  })}

                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Sub Category
                </label>
                <select
                  name='subSubCategory'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  {storeSubSubCategory?.map((v)=>{
                    return(
                      <option key={v._id} value={v._id}>{v.subSubCategoryName}</option>
                    )
                  })}

                 

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Color
                </label>
                <select
                 name='color'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  {storeColor?.map((v)=>{
                    return(
                      <option key={v._id} value={v._id}>{v.colorName}</option>
                    )
                  })}

                 
                 

                </select>
               
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Best Selling
                </label>
                <select
                  name='bestSelling'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Upsell
                </label>
                <select
                  name='upSell'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>

                </select>
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Sale Price
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder=' Sale Price'
                  name='sellingPrice'
                />
                
              </div>


              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Order
                </label>
                <input
                  type="number"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Order'
                 name='order'
                />
                
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Slug
                </label>
                <input
                  type="text"
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='slug'
                  name='slug'
                
                />
                
              </div>


            </div>
          </div>

          <div className='py-[40px]'>
            <label
              htmlFor="categoryImage"
              className="block  text-md font-medium text-gray-900 text-[#76838f]"
            >
              Description
            </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} name="description" className='h-[200px]'  />

          </div>
          

          <button className=" mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
             Add Product
             </button>

        </form>

      </div>
    </section>
  )
}

