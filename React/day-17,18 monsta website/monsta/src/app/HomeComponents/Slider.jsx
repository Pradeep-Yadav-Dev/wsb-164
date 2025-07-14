import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import slider2img from "../../../public/images/imgi_37_e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg"

export default function SliderHome() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <Container fluid className="p-0" >
      <Slider {...settings}>
        <div>
          <img src={"https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg"} className="img-fluid"  alt=""/>
        </div>
        <div>
           {/* <Image src={slider2img} style={{width:"100%"}} height={400} alt="" /> */}
           <Image src={"https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg"} width={1000} height={400} alt="" />
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  )
}
