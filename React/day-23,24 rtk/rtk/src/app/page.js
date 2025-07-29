"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useEffect } from "react";
import { productThunk } from "./redux/features/product/productThunk";

export default function Home() {
  let counter = useSelector((state) => state.counter.value)
  let { value, loading, error } = useSelector((state) => state.product)

  console.log(value, loading, error)

  // let a={
  //   name:"pradeep",
  //   age:26
  // }

  // a.age
  // a.name
  // let {age,name}=a

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(productThunk())
  }, [])

  return (
    <div className="max-w-[1000px] mx-auto mt-[100px] flex gap-[20px]   " >

      {/* <button onClick={() => dispatch(decrement())} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">-</button>


      <h1> Counter: {counter} </h1>


      <button onClick={() => dispatch(increment())} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">+</button> */}

      <div className="max-w-[1400px] mx-auto border grid grid-cols-4 gap-[10px] ">
        {
          loading == true ? "please wait"
            :
            value?.map((v, i) => {
              return (
                <>


                  <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {v.title} </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </>
              )
            })
        }
      </div>
    </div>
  );
}
