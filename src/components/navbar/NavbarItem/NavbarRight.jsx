import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa6"
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {

  
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { carts } = useSelector(state => state.carts)
  console.log(carts, "carts içinde ne var")



  // const handleIconClick = () => {
  //   setIsClicked(!isClicked);
  // };

  useEffect(() => {
    dispatch(getCartTotal())

  }, [dispatch])
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center p-3 bg-gray-200 border rounded-full'>
        <input className='bg-gray-200 outline-none' type='text' placeholder='arama yapınız ' />
        <BiSearch size={25} />
      </div>
      <FaRegHeart
        size={25}
        // color={isClicked ? 'red' : 'black'}
        // onClick={handleIconClick}
        // style={{ cursor: 'pointer' }}
      />

      <div onClick={() => navigate("/cart")} className='ralative'>
        <div className='flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full absoulute -top-3 -right-3'>{carts?.length}</div>
        <SlBasket size={25} />
      </div>

    </div>
  )
}

export default NavbarRight