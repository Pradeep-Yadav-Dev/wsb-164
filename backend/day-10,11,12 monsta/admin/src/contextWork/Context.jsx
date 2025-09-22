import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";
import React from 'react'
import Cookies from "js-cookie";

export const AdminContext=createContext()


export default function Context({children}) {

    // fetch profile
    const [profileStore,setProfileStore]=useState({})
    const [filePath,setfilePath]=useState("")

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}view-profile`,
            { headers: { "Auth":`Bearer ${Cookies.get("token")}` } }
        )
        .then(res=>{
            setProfileStore(res.data.data)
            setfilePath(res.data.filePath)
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <AdminContext.Provider value={{profileStore , filePath}}>
      {children}
    </AdminContext.Provider>
  )
}
