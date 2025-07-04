import React, { createContext, useState } from 'react'


export const EcommContext = createContext()

export default function BlinkitContext({ children }) {

    const [cart, setCart] = useState([])

    return (
        <EcommContext value={{cart, setCart}}  >
            {children}
        </EcommContext>
    )
}
