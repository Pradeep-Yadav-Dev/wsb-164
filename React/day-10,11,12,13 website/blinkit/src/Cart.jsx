import React, { useContext, useEffect, useState } from 'react'
import Header from './commons/Header'
import Footer from './commons/Footer'
import { EcommContext } from './context/BlinkitContext'


export default function Cart() {

  let { cart ,total,SetTotal} = useContext(EcommContext)

  let sum=0

  useEffect(()=>{
      cart.forEach(v => {
          sum+=(v.qauntity)*(v.price)
      });


      SetTotal(sum)

  },[cart])


  return (
    <>

      <Header />

      <div className="min-h-screen bg-gray-50 pt-24 pb-28 px-4 md:px-8">
        <h2 className="text-2xl font-semibold mt-6 mb-6">Your Cart </h2>

        <div className="space-y-4">
          <div class="container mx-auto mt-10">
            <div class="flex shadow-md my-10">
              <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                  <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 class="font-semibold text-2xl">{cart.length} Items</h2>
                </div>
                <div class="flex mt-10 mb-5">
                  <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>


                {cart.length > 0
                  ?
                  cart.map((v, i) => {
                    return (
                      <CartBox v={v} />
                    )
                  })
                  :
                  "No  One Item Add In Your Cart"
                }
              </div>

              <div id="summary" class="w-1/4 px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                  <span class="font-semibold text-sm uppercase">Items {cart.length}</span>
                  <span class="font-semibold text-sm">{(total).toFixed(2)}$</span>
                </div>

                <div class="flex justify-between mt-10 mb-5">
                  <span class="font-semibold text-sm uppercase">GST</span>
                  <span class="font-semibold text-sm"> 18 GST </span>
                </div>
                
                
                
                <div class="border-t mt-8">
                  <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$ {((total*18/100) + (total)).toFixed(2)}  </span>
                  </div>
                  <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                </div>
              </div>

            </div>
          </div>



        </div>


      </div>


      <Footer />

    </>
  )
}


let CartBox = ({ v }) => {
  let { cart, setCart } = useContext(EcommContext)

  let [counter, setCounter] = useState(v.qauntity)

  useEffect(() => {
    let updateData = cart.filter((item) => {
      if (item.id == v.id) {
        return item.qauntity = counter
      }

      return item
    })
    setCart(updateData)

  }, [counter])






  // let a={
  //   name:"pradeep",
  //   age:25
  // }

  // a.age=55

  // console.log(a)

  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <img class="h-24" src={v.img} alt="" />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm"> {v.title} </span>
          <span class="text-red-500 text-xs"> {v.brand} </span>
          <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <svg onClick={() => setCounter(counter - 1)} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input class="mx-2 border text-center w-8" type="text" value={v.qauntity} />

        <svg onClick={() => setCounter(counter + 1)} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">$ {v.price} </span>
      <span class="text-center w-1/5 font-semibold text-sm">${((v.price) * (v.qauntity)).toFixed(2)} </span>
    </div>
  )
}
