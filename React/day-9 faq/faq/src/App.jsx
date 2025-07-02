import React, { useEffect, useState } from 'react'

import './App.css'
import { FaPlus } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import Header from './Header';

function App() {
  let faqData = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: "Netflix offers several plans to fit your needs. Pricing varies by region and plan, starting with affordable options for streaming on one device up to premium plans for multiple devices and higher quality."
    },
    {
      id: 3,
      question: "How do I sign up for Netflix?",
      answer: "Visit netflix.com, click 'Join Now,' and follow the steps to create an account. You'll need an email address and a payment method to get started."
    },
    {
      id: 4,
      question: "Can I watch Netflix offline?",
      answer: "Yes, Netflix allows you to download select titles on mobile devices for offline viewing. Just look for the download icon next to eligible movies and shows."
    },
    {
      id: 5,
      question: "What devices support Netflix?",
      answer: "Netflix is available on smart TVs, phones, tablets, gaming consoles, streaming media players, and computers. Check our website for a full list of compatible devices."
    },
    {
      id: 6,
      question: "Can I share my Netflix account?",
      answer: "Depending on your plan, you can share your account with members of your household. Some plans allow streaming on multiple devices at once."
    },
    {
      id: 7,
      question: "How do I cancel my Netflix subscription?",
      answer: "You can cancel your subscription anytime through your account settings. There are no cancellation fees, and you can restart your membership whenever you like."
    },
    {
      id: 8,
      question: "Does Netflix have parental controls?",
      answer: "Yes, Netflix offers parental controls to create kid-friendly profiles, set content ratings, and restrict specific titles to ensure a safe viewing experience."
    },
    {
      id: 9,
      question: "What kind of content does Netflix offer?",
      answer: "Netflix has a vast library including original series, blockbuster movies, documentaries, anime, and kids' shows, with new content added regularly."
    },
    {
      id: 10,
      question: "Is Netflix available worldwide?",
      answer: "Netflix is available in over 190 countries, though content libraries may vary by region due to licensing agreements."
    },
    
  ];

  const [storeId,setStoreId]=useState(1)

  let  gaqId=(myId)=>{
  
    setStoreId(myId)

  }

 



  return (
   <>
   <Header/>
    <div className='max-w-[1200px] mx-auto p-[20px]  bg-[#ccc] ' >
      <h1 className='text-[30px] font-bold py-[20px]' >Frequently Asked Questions  </h1>
      <div className="main">

        {faqData.map((v) => {
          return (
            console.log(storeId , v.id),
            <div className="row my-[10px] " key={v.id} >

              <h2 onClick={()=>gaqId(v.id)} className='bg-[#414141] p-[10px] text-white font-bold  text-[20px] flex justify-between items-center  ' >
                {v.id}.  {v.question}   {storeId==v.id ? <RxCross1 /> : <FaPlus />}
              </h2>

              <p className={`bg-[#2D2D2D] text-white  p-[10px] text-[16px] ${storeId==v.id ? "block": "hidden"}`} >
                {v.answer}
              </p>

            </div>
          )
        })}




      </div>
    </div>
   </>
  )
}

export default App
