import React from 'react'
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type='text' placeholder='arama yapınız ' />
        <BiSearch size={25} />
      </div>
      <FaRegHeart size={25} />

      <div className='ralative'>
        <div className='absoulute -top-3 -right-3 bg-red-500 text-w  rounded-full w-5 h-5 flex items-center justify-center'>3</div>
        <SlBasket size={25} />
      </div>

    </div>
  )
}

export default NavbarRight