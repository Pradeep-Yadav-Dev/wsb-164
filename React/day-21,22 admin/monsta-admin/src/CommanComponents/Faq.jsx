import React, { useEffect, useState } from 'react'


import { FaPlus } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import Header from './Header';
import { Data } from '../Data';
import { Link } from 'react-router-dom';

function Faq() {
    

    const [storeId, setStoreId] = useState(1)

    let gaqId = (myId) => {

        setStoreId(myId)

    }





    return (
        <>
           
            <div className='max-w-[1200px] mx-auto p-[20px]  bg-[#ccc] ' >
               <img src='https://www.wscubetech.com/images/wscube-tech-logo-2.svg'/>
                <div className="main">

                    {Data.map((v) => {
                        return (
                           
                            <div className="row my-[10px] " key={v.id} >

                                <h2 onClick={() => gaqId(v.id)} className=' p-[5px] font-bold  text-[20px] flex justify-between items-center  ' >
                                    {v.menuIcon}    {v.menuName}   {storeId == v.id ? <RxCross1 /> : <FaPlus />}
                                </h2>

                                <ul className={`${storeId==v.id ? "block": "hidden"}`} >

                                    {v.subMenu?.map((p)=>{
                                        return(
                                           <Link to={p.subMenuLink} >
                                              <li className=' my-[5px] bg-[skyblue] p-[5px] flex items-center '> {p.sumMenuIcon}  {p.subMenuName} </li>
                                           </Link>
                                        )
                                    })}
                                    
                                   
                                    
                                </ul>

                            </div>
                        )
                    })}




                </div>
            </div>
        </>
    )
}

export default Faq
