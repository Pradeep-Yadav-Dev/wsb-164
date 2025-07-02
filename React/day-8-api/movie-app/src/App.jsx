import React, { useEffect, useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

import './App.css'
import axios from 'axios'

function App() {

  const [inputValue, setInputValue] = useState("")
  const [movieData, setMovieData] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  

  let getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  // get data from api
  let displayMovie = () => {
    let Api;

    if (inputValue == "") {
      Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${currentPage}`
    }
    else {
      Api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${inputValue}`
    }

    axios.get(Api)
      .then((ress) => {
        setMovieData(ress.data.results)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    displayMovie()

  }, [inputValue,currentPage])






  return (
    <>
      <div className="w-full bg-[#ccc]    p-[10px]">
        <div className="max-w-[1200px]  mx-auto ">
          <div className="row py-[20px]  ">
            <h1 className='text-[25px] font-bold py-[10px] '> Movie App </h1>

            <input value={inputValue} onChange={getInputValue} type="text" className='border p-[10px] w-[80%] ' placeholder='search movie' />

          </div>

          <div className="grid grid-cols-4 gap-[15px] ">

            {movieData.length > 0
              ?
              movieData.map((v, i) => {
                return (
                  <div class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img class="rounded-t-lg h-[380px] w-full " src={`https://image.tmdb.org/t/p/w1280${v.poster_path}`} alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {v.original_title}
                        </h5>
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
                )
              })
              :
              "please wait......."
            }






          </div>

          <div className="py-[20px]">
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App


4600 fee

135 live class


nimionline 

2nd round -> 15 july 

3rd -> 


12km away from city

name:kumba ram ji sir