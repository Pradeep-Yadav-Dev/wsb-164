"use client"
import React, { useEffect, useState } from 'react'
import LeftRight from '../../commanComponents/LeftRight'
import { useParams } from 'next/navigation'
import axios from 'axios'




export default function page() {
  // http://localhost:5600/api/

  let myParams=useParams().slug
  let categoryslug=myParams[myParams.length-1]
  const [categoryData,setCategoryData]=useState([])

  
  

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}product/slug/${categoryslug}`)
      .then((ress) => {
        setCategoryData(ress.data.data)
      })
  },[categoryslug])
  return (
    <>


      <LeftRight  categoryData={categoryData}/>

    </>
  )
}
