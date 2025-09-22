import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Cookies from "js-cookie"

export const Econtext = createContext()

export default function WebsiteContext({ children }) {


    // fetch color
    const [storeColor, setStoreColor] = useState([])
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}color/view`)
            .then((ress) => {
                setStoreColor(ress.data.data)
            })
    }, [])
    

    // fetch Material


    // fetch Category
    const [storeCat, setStoreCat] = useState([])

   
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}category/view`)
            .then((ress) => {
                setStoreCat(ress.data.data)
            })
    }, [])

    // totalAmount
    let [totalAmount, setTotalAmount] = useState(0)
     useEffect(() => {
            axios.get(`${process.env.NEXT_PUBLIC_URL}cart/view`,
                { headers: { "auth": `Bearer ${Cookies.get('monsta-website-164')}` } },
            )
                .then((ress) => {

                    setTotalAmount(ress.data.totalAmout)
                })
        }, [])




    return (
        <Econtext.Provider value={{ storeColor, storeCat ,totalAmount, setTotalAmount}} >
            {children}
        </Econtext.Provider>
    )
}
