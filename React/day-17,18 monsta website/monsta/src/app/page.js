"use client"
import axios from "axios";
import { useEffect } from "react";
import Slider from "./HomeComponents/Slider";
import Tabings from "./HomeComponents/Tabings";
import SliderHome from "./HomeComponents/Slider";

export default function Home() {

  let displayData = () => {
    axios.get("https://dummyjson.com/products")
      .then((ress) => {
        // console.log(ress.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    displayData()
  }, [])


  return (
    <>
     <SliderHome/>
     <Tabings/>
     
    </>
  );
}
