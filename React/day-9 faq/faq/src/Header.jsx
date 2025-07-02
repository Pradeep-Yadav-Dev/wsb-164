import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    useEffect(() => {
        window.scroll({
            top: 0,
           
        })
    }, [])

    
    return (
        <div className='sticky top-[0px] py-[20px] ' >
            <ul className='flex bg-[skyblue]  gap-[25px]'>
                <Link to={"/"} ><li>Home</li></Link>
                <Link to={"/api"} ><li>Api</li></Link>

            </ul>
        </div>
    )
}
