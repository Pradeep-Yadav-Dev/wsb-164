import React, { useEffect, useState } from 'react'
import Footer from './commons/Footer'
import Header from './commons/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Category() {


    const [catUrl,setCatUrl]=useState("")

   
    // show product function
    const [allProduct, setAllProduct] = useState([])
    let displayProduct = () => {
        let Api;
        if(catUrl==""){
            Api="https://dummyjson.com/products?limit=200"
        }
        else{
            Api=catUrl
        }


        axios.get(Api)
            .then((ress) => {
                setAllProduct(ress.data.products)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // show category list
    const [allCategory, setAllCategory] = useState([])

    const displayCategory = () => {
        axios.get("https://dummyjson.com/products/categories")
            .then((ress) => {
                setAllCategory(ress.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    /////////////////////////////////////////////////////////////
    let getCatUrl=(myUrl)=>{
       setCatUrl(myUrl)
    }

 
    useEffect(() => {
        displayProduct()
       
    }, [catUrl])

    useEffect( displayCategory,[])


    return (
        <>
            <Header />


            <div className="mx-auto lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px]  mt-20 pt-20 ">
                <div className=' border border-gray-100 py-2'>
                    <h1 className='font-bold ps-3'>Buy Milk Online</h1>
                </div>
                <div className='grid grid-cols-[15%_auto] gap-[10px] pt-2'>
                    <div className='overflow-hidden overflow-y-scroll h-[500px] bg-white border border-gray-100'>



                        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            {allCategory.length > 0 ?
                                allCategory.map((v,i)=>{
                                    return(
                                         <List props={v} getCatUrl={getCatUrl} />
                                    )
                                })
                                :
                                "pleasse wait......"
                            }
                           

                        </ul>


                    </div>

                    <div className='overflow-hidden overflow-y-scroll h-[500px] bg-[#F7F7FA] pt-2 border border-gray-100 pb-3'>

                        <div className=" grid grid-cols-6 gap-2" >

                            {allProduct.length > 0
                                ?
                                allProduct.map((v, i) => {
                                    return (
                                        <Card v={v} />
                                    )
                                })
                                :
                                "please wait....."
                            }

                        </div>


                    </div>



                </div>
            </div>



            <Footer />
        </>
    )
}


const Card = ({ v }) => {


    return (
        <div className='bg-white px-2 ps-2 pe-2 ms-5  '>
            <div class="  border-gray-200 rounded-lg shadow-sm">
                <Link to={`/purchase/${v.id}`} ><img class="p-8 rounded-t-lg" src={v.thumbnail} alt="product image" /></Link>
                {v.id}
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-black  "> {v.title} </h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-bold text-gray-900 dark:text-black px">$ {v.price} </span>
                        <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mt-0.5 mb-2"> Add </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



const List = ({props , getCatUrl}) => {

    
    return (
        <li onClick={()=>getCatUrl(props.url)} class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"> {props.name} </li>
    )
}