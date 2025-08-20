import React, { useEffect, useState } from 'react'
import Sidebar from '../../common/Sidebar'
import Header from '../../common/Header'
import Breadcrumb from '../../common/Breadcrumb'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'
import { MdFilterAltOff, MdModeEdit } from 'react-icons/md'
import { FaFilter } from 'react-icons/fa'
 import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

export default function ViewMeterials() {
    let [activeFilter, setactiveFilter] = useState(true);
    let [store, setStore] = useState([])


    // searchWork
    const [searchValue,setSearchhValue]=useState("")


    let searchWork=(e)=>{
       setSearchhValue(e.target.value)
    }

    const displayData = () => {
        axios.get(`${import.meta.env.VITE_API_URL}material/view?search=${searchValue}&page=1&limit=5`)
            .then((ress) => {
                setStore(ress.data.data)
                console.log(ress.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // http://localhost:5600/admin/material/status-update/689d99aa1a6f1bd26c5d6bbd

    let changeStatus = (id) => {
        axios.put(`${import.meta.env.VITE_API_URL}material/status-update/${id}`)
            .then((ress) => {
                console.log(ress.data)
                  displayData()
                  toast.success(ress.data.message)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // /single-delete/:_id

    let singleDeleteWork = (id) => {
        axios.delete(`${import.meta.env.VITE_API_URL}material/single-delete/${id}`)
            .then((ress) => {
                
                  displayData()
                  toast.success(ress.data.message)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    

    useEffect(() => {
        displayData()
    }, [searchValue])

    return (
        <>
        <ToastContainer />
            <Breadcrumb path={"Material"} link={"/materials/view"} path2={"View"} slash={"/"} />
            <div className="w-full h-[610px]">
                <div className="max-w-[1220px] mx-auto py-2">

                    <div className={` rounded-lg border border-gray-300 px-5 py-5 max-w-[1220px] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>

                        <form className="flex max-w-sm">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="simple-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Name"
                                    onChange={(e)=>searchWork(e)}
                                />
                            </div>
                            
                        </form>


                    </div>


                    <div className="w-full min-h-[610px]">
                        <div className="max-w-[1220px] mx-auto py-5">
                            <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
                                <h3 className="text-[26px] font-semibold" >
                                    View Material
                                </h3>
                                <div className='flex justify-between '>
                                    <div onClick={() => setactiveFilter(!activeFilter)} className="cursor-pointer mx-3 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {activeFilter ? <FaFilter className='text-[18px]' /> : <MdFilterAltOff className='text-[18px]' />}
                                    </div>

                                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Change Status</button>
                                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete </button>
                                </div>
                            </div>
                            <div className="border border-t-0 rounded-b-md border-slate-400">

                                {/* border-2 border-[red] */}
                                <div className="relative overflow-x-auto">


                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="p-4">
                                                        <div className="flex items-center">
                                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Material Name
                                                    </th>

                                                    <th scope="col" className=" w-[12%] ">
                                                        Order
                                                    </th>
                                                    <th scope="col" className="w-[11%]">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="w-[11%]">
                                                        Delete
                                                    </th>
                                                    <th scope="col" className="w-[6%]">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {store.length > 0
                                                    ?
                                                    store.map((v) => {
                                                        return (

                                                            <tr key={v._id} className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                                <td className="w-4 p-4">
                                                                    <div className="flex items-center">
                                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                                    </div>
                                                                </td>
                                                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

                                                                    <div className="py-4">
                                                                        <div className="text-base font-semibold"> {v.materialName} </div>

                                                                    </div>
                                                                </th>

                                                                <td className="px-6 py-4">
                                                                    {v.order}
                                                                </td>

                                                                <td className=" py-4">

                                                                    {v.status == true
                                                                        ?
                                                                        <button onClick={() => changeStatus(v._id)} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Active</button>

                                                                        :
                                                                        <button onClick={() => changeStatus(v._id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Inactive </button>
                                                                    }

                                                                </td>

                                                                <td className=" py-4">

                                                                    <button onClick={()=>singleDeleteWork(v._id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete </button>
                                                                </td>
                                                                <td className=" py-4">

                                                                    <Link to={`/material/update/${v._id}`} >
                                                                        <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                            <MdModeEdit className='text-[18px]' />
                                                                        </div>
                                                                    </Link>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                    :
                                                  <p className='text-center'> No Record Found !!</p>
                                                }





                                            </tbody>
                                        </table>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
