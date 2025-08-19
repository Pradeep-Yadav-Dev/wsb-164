
import React, { useEffect, useState } from "react";

import Breadcrumb from "../../common/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';

export default function UpdateMeterials() {

  const [editData,setEditData]=useState({})
 
  let paramsId=useParams().id
  

  // /fetch/:_id

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}material/fetch/${paramsId}`)
    .then((ress)=>{
      setEditData(ress.data.data)
    })
    .catch((error)=>{
      console.error(error)
    })
  },[paramsId])


  
// /material/view
let navigate=useNavigate()

  let editForm=(e)=>{
    e.preventDefault()

    axios.put(`${import.meta.env.VITE_API_URL}material/edit/${paramsId}`, e.target)
    .then((ress)=>{
      toast.success(ress.data.message)
      

      setTimeout(()=>{
        navigate("/material/view")
      },1000)

    })
    .catch((error)=>{
      console.error(error)
    })
  }

 

  return (
    <section className="w-full">
      <Breadcrumb path={"Material"} path2= {"Update"}  slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Update Material
          </h3>

          <ToastContainer/>
          <form onSubmit={editForm} className="border border-t-0 p-3 rounded-b-md border-slate-400">
            
              <div className="">
                <div className="mb-5">
                  <label
                    htmlFor="Name"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="materialName"
                    id="Name"
                    defaultValue={editData.materialName}
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Material Name"
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
                    name="order"
                       defaultValue={editData.order}
                    id="order"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Order"
                  />
                  
                </div>
              </div>
           
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
            Update Material
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
