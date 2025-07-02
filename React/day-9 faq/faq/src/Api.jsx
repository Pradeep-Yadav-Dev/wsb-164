import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function Api() {


    const [apiData, setApiData] = useState([])

    let showApiData = () => {
        axios.get("https://dummyjson.com/carts")
            .then((response) => {
                setApiData(response.data.carts)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    useEffect(showApiData, [])

    console.log(apiData)


    return (

       <>
        <Header/>
        <div className='grid grid-cols-4' >

            {apiData.map((v, i) => {
                return (
                    <div className="border">
                        {v.id}
                    </div>
                )
            })}

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>


            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>



            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>



            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>


            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>


            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quasi porro dolor pariatur asperiores, cumque rerum non, delectus minus ipsa a soluta quae veniam dolore repudiandae? Fugit, laboriosam. Quas, amet.
            </p>

        </div>
       </>
    )
}
