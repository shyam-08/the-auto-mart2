import React from 'react'
// import { motion } from "framer-motion"
export default function Button(menuItem,filterItem,setItem) {
  return (
    <div className='d-flex justify-content-center'>
        {
            menuItem.map(val =>(
                <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'>
                    onClick={()=>filterItem(val)}
                    {val}
                </button>
            ))
        }
        <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'>
        onClick={()=>setItem(val)}
                    All
                </button>
    </div>
  )
}
