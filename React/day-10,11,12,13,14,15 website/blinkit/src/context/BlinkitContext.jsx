import React, { createContext, useEffect, useState } from 'react'


export const EcommContext = createContext()

export default function BlinkitContext({ children }) {

    const [cart, setCart] = useState( JSON.parse(localStorage.getItem("wsb-164")) ?? [])

    useEffect(()=>{
        localStorage.setItem("wsb-164", JSON.stringify(cart))
    },[cart])

    const [total,SetTotal]=useState(0)

    return (
        <EcommContext value={{cart, setCart ,total,SetTotal}}  >
            {children}
        </EcommContext>
    )
}
