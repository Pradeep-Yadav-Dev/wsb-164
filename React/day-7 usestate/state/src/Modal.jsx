import React, { useState } from 'react'

export default function Modal() {

    const [showModal, setShowModal] = useState(false)

    console.log(showModal)

    let modalFn = () => {
        setShowModal(!showModal)
    }


    return (
        <>
            <button onClick={modalFn} > {showModal==false ? "Show Modal" : "Hide Modal"}  </button>

            <div className={` modalDiv ${showModal==true ? "activeClass" : ""}`}>
                <h1>Modal</h1>
                <span onClick={()=>setShowModal(false)} >X </span>
            </div>
{/* 
            {showModal==true ? "done" : "not done"} */}
        </>
    )
}
