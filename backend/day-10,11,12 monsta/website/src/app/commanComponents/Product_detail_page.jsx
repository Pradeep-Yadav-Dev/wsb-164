"use client"
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PiGreaterThanThin } from "react-icons/pi";
import "./Product_detail_page.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Bestselling from './Bestselling';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { header } from 'framer-motion/client';
import Cookies from 'js-cookie';
// import Bestselling from './Bestselling';


export default function Product_detail_page() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: false
            }

        }, {

            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                dots: false
            }

        }]
    };
    const [singleProduct,setSingleProduct]=useState({})
    let slug=useParams().slug[0]

     useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}product/single/${slug}`)
          .then((ress) => {
            setSingleProduct(ress.data.data)
          })
      },[slug])


    //   console.log(singleProduct)
    //   http://localhost:5600/uploads/

      
    // addToCart

    let addToCart=()=>{
        let cartObj={
            productId:singleProduct._id,
            quantity:1,
            productImage:singleProduct?.backImage,
            productName:singleProduct?.productName,
            price:singleProduct?.sellingPrice
        }

        axios.post(`${process.env.NEXT_PUBLIC_URL}cart/add`,
            cartObj,
            {headers: {"auth": `Bearer ${Cookies.get('monsta-website-164')}`}},

        )

        alert("Product Added to Cart")
    }
    
    return (
        <section  >
            <Container className='my-5 Product_detail_pageDiv'  >
                <h1 className='text-center fw-bold '> {singleProduct?.productName}  </h1>
                <ul className='border-bottom pb-4 d-flex  justify-content-center coloreGray '>
                    <li>Home <span> <PiGreaterThanThin className='arrowDiv' /> </span> </li>
                    <li>Side and End Tables <span> <PiGreaterThanThin className='arrowDiv' /> </span> </li>
                    <li >Hrithvik Stool  </li>

                </ul>

                <Row xs={1} md={2} className='pt-4' >
                    <Col>
                        <div className=''>
                            <img src={`http://localhost:5600/uploads/${singleProduct?.backImage}`} className='img-fluid' />
                        </div>


                        <div className='product_slider'>
                            <div className='pre_arrow ' > <FaAngleLeft /> </div>
                            <div className='next_arrow'> <FaAngleRight />  </div>
                            <Slider {...settings} className='sildeSider' >

                                <div className='p-2' >
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                                <div className='p-2'>
                                    <img className='img-fluid' src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg' />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                    <Col>
                        <h3 className='pt-4 pt-md-0 ' > {singleProduct?.productName} </h3>
                        <div className="product_price">
                            <span className="old_price">Rs.  {singleProduct?.actualPrice} </span>
                            <span className="current_price">Rs. {singleProduct?.sellingPrice}</span>
                        </div>
                        <div className="product_desc">
                             <div dangerouslySetInnerHTML={{ __html: singleProduct?.description }} />
                        </div>

                        <button className="button" onClick={addToCart}>add to cart</button>

                        <div className="product_d_meta">
                            {/* <span>Code: jodn0056</span>
                            <span>Dimension: 72L * 32H * 30W</span>
                            <span>Estimate Delivery Days: "40-45" Days</span> */}
                            <span>Category:
                                <a> {singleProduct?.parentCategory?.parentCategoryName}</a>
                            </span>
                            <span>Color:
                                <a>{singleProduct?.color?.colorName}</a>
                            </span>
                            <span>Material:
                                <a>{singleProduct?.material?.materialName}</a>
                            </span>
                        </div>
                    </Col>
                </Row>


                <div className='Description'>
                    <h3>Description</h3>
                    
                     <div dangerouslySetInnerHTML={{ __html: singleProduct?.description }} />
                </div>
            </Container>

            <Bestselling />

            <Bestselling />
        </section>
    )
}
