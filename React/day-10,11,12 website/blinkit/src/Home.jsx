import React from 'react'
import Header from './commons/Header'
import Footer from './commons/Footer'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6.3,
  autoPlay: false,
  slidesToScroll: 4
};

export default function Home() {
  return (
    <>
      <Header />
      <section className='max-w-[1280px] mx-auto mt-2 pt-30'>
        <div className=" ">
          
            <img src="../public/images/section1_1.jpg" alt="" />


        </div>
        <div className="grid grid-cols-[25%_25%_25%_auto] mt-3.5 gap-6">
          <div><img src="../public/images/section2a.jpg" className='' alt="" /></div>
          <div><img src="../public/images/section2b.jpg" className='' alt="" /></div>
          <div><img src="../public/images/section2c.jpg" className='' alt="" /></div>
        </div>
        <div className="grid grid-cols-10 mt-3.5 gap-2">
          <div><img src="../public/images/section3a.png" alt="" /> </div>
          <div><img src="../public/images/section3b.png" alt="" /> </div>
          <div><img src="../public/images/section3c.png" alt="" /> </div>
          <div><img src="../public/images/section3d.png" alt="" /> </div>
          <div><img src="../public/images/section3e.png" alt="" /> </div>
          <div><img src="../public/images/section3f.png" alt="" /> </div>
          <div><img src="../public/images/section3g.png" alt="" /> </div>
          <div><img src="../public/images/section3h.png" alt="" /> </div>
          <div><img src="../public/images/section3i.png" alt="" /> </div>
          <div><img src="../public/images/section3j.png" alt="" /> </div>
        </div>
        <div className="grid grid-cols-10 mt-3.5 gap-2">
          <Link to= {"/category"}>
            <div><img src="../public/images/section4a.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4b.png" alt="" /> </div>
          </Link>
          
          <Link to= {"/category"}>
            <div><img src="../public/images/section4c.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4d.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4e.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4f.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4g.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4h.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4i.png" alt="" /> </div>
          </Link>

          <Link to= {"/category"}>
            <div><img src="../public/images/section4j.png" alt="" /> </div>
          </Link>
          
          
        </div>
      </section>

      <section className='max-w-[1280px] mx-auto '>
        <h1 className='text-2xl font-bold mb-5'>Dairy, Bread & Eggs</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1a.jpg" alt="product image" />
              </Link>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Rolling paper & tobacco</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2a.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2l.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2m.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2n.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2o.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Snack and Munchies</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3a.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3l.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3m.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3n.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3o.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3p.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Dairy, Bread & Eggs</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1a.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Rolling paper & tobacco</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2a.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2l.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2m.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2n.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider2o.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Snack and Munchies</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3a.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3l.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3m.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3n.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3o.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider3p.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Dairy, Bread & Eggs</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1a.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-[15px] font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1b.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1c.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1d.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1e.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1f.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1g.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1h.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1i.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1j.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <Link to={"/purchase"} >
                <img class="p-8 rounded-t-lg" src="../public/images/slider1k.jpg" alt="product image" />
              </Link>

              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Rolling paper & tobacco</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2a.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2b.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2c.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2d.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2e.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2f.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2g.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2h.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2i.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2j.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2k.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2l.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2m.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2n.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider2o.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className='max-w-[1280px] mx-auto'>
        <h1 className='text-2xl font-bold mb-5'>Snack and Munchies</h1>
        <Slider {...settings}>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3a.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3b.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3c.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3d.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3e.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3f.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3g.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3h.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3i.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3j.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3k.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3l.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3m.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3n.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3o.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div class="  border-gray-200 rounded-lg shadow-lg">
              <a href="#">
                <img class="p-8 rounded-t-lg" src="../public/images/slider3p.jpg" alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-black">Amul Taza Toned Milk</h5>
                </a>
                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900 dark:text-black">$599</span>
                  <button type="button" className="text-[#0C831F] bg-[#F7FFF9]  border border-solid border-[#0C831F] focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mt-0.5 mb-2">Add</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <Footer />
    </>
  )
}
