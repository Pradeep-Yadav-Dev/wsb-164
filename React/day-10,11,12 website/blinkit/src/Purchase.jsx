import React, {  useContext, useEffect, useState } from 'react'
import Footer from './commons/Footer'
import Header from './commons/Header'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { EcommContext } from './context/BlinkitContext';
import { ToastContainer, toast } from 'react-toastify';

export default function Purchase() {
    let [singleProduct, setSingleProduct] = useState(null)

    let pId = useParams().id

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${pId}`)
            .then((ress) => {
                setSingleProduct(ress.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])



    ///////////////////////// use context
    let {cart, setCart}=useContext(EcommContext)

  

    let addtocart=(pData)=>{
       
        let cartObj={
            id:pData.id,
            img:pData.thumbnail,
            brand:pData.brand,
            title:pData.title,
            price:pData.price,
            qauntity:1
        }

        setCart([...cart,cartObj])
        toast.success("Item Add Successfully")
    }  
    
    
//     let a=[{id:1} , {id:2 }]

//     let b={id:2}



//    let isExist=a.some((v)=>{
//         if(v.id==b.id){
//             return true
//         }
//         else{
//             return false
//         }
//    })

//    console.log(isExist)

    

    return (
        <>

            <Header />

        <ToastContainer />

            <section className='mt-2 pt-22'>

                <div className=" grid grid-cols-2 ">
                    <div className="border  border-gray-100 p-10 overflow-hidden overflow-y-scroll h-[743.3px] no-scrollbar">
                        <img src={singleProduct?.thumbnail} className='mx-auto border-1 border-[#FFF] hover:border-black' alt="" />

                        <div className=' grid grid-cols-6 mx-auto gap-5 px-20 mt-10'>


                            {singleProduct?.images.map((v) => {
                                return (
                                    <img src={v} className='border-gray-200 border-1 rounded-xl hover:border-black' alt="" />
                                )
                            })}


                        </div>

                        <div className='ps-20'>
                            <h1 className='font-bold text-[20px] mt-15 '>Highlights</h1>
                            <button type="button" class="focus:outline-none  bg-gray-100 border-1 border-gray-200 mt-5  font-medium rounded-xl text-sm px-13 py-4 me-2 mb-2 ">Type <p className='font-bold text-black'>Toned milk</p></button>
                            <h1 className='font-bold text-[20px] mt-10 mb-3'>product details </h1>
                            <p>
                                <p className='text-[16px] font-bold'>Description</p>
                                <p className='text-wrap text-[15px]'>Amul Taaza Toned Milk (Polypack) is pasteurized with a great nutritional value. It can be consumed directly or can be used for preparing tea, coffee, sweets, khoya, curd, buttermilk, ghee etc</p>
                                <p className='text-green-800 cursor-pointer '>View More Details </p>
                            </p>

                        </div>

                    </div>
                    <div className=" border  border-gray-100 p-13">

                        <p className='text-[14px] font-bold '> brand:- brand{singleProduct?.brand}  </p>

                        <h1 className='font-bold text-[20px] mt-3'>{singleProduct?.title}</h1>





                        <div className='mt-2  '>
                            <div> <p> discountPercentage:- {singleProduct?.discountPercentage} </p>
                                <p> category:-  {singleProduct?.category} </p>
                                <p>₹{singleProduct?.price}</p>
                                <p className='mt-[10px]' > {singleProduct?.description} </p> </div>

                            <div></div>



                        </div>


                        <div className="flex mt-[10px]">
                            <div>
                                <button onClick={()=>addtocart(singleProduct)} type="button" class="focus:outline-none text-white bg-[#318616]  font-bold rounded-lg text-sm px-8 py-4 me-2 mb-2 ">Add To Cart</button>
                            </div>



                        </div>

                        <div className='mt-8'>

                            <h1 className='text-[18px] font-bold'>Why shop from blinkit?</h1>

                            <div className='flex mt-5 items-center'>
                                <img src="../public/images-purchase/imgi_10_10_minute_delivery.png" className='h-16' alt="" />
                                <p className='ms-3'>
                                    <p className='text-[15px] font-bold'>Superfast Delivery</p>
                                    <p className='text-[15px]  ' >Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                </p>
                            </div>

                            <div className='flex items-center mt-2'>
                                <img src="../public/images-purchase/imgi_11_Best_Prices_Offers.png" className='h-16' alt="" />
                                <p className='ms-3'>
                                    <p className='text-[15px] font-bold'>Best Prices & Offers</p>
                                    <p className='text-[15px] '>Best price destination with offers directly from the manufacturers.</p>
                                </p>
                            </div>

                            <div className='flex items-center mt-2'>
                                <img src="../public/images-purchase/imgi_12_Wide_Assortment.png" className='h-16' alt="" />
                                <p className='ms-3'>
                                    <p className='text-[15px] font-bold'>Wide Assortment</p>
                                    <p className='text-[15px] '>Choose from 5000+ products across food, personal care, household & other categories.</p>
                                </p>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
            
            <Footer />

        </>
    )
}
