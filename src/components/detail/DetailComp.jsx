import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart } from "../../redux/cartSlice"

const DetailComp = ({ProductDetail}) => {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0)
    const decrement =()=>{
       if (quantity > 0) {
        setQuantity(quantity-1)
       }else{
       toast.error("Oops! 0 'ın altına inemezsiniz !",{
        autoClose:3000,
        position:"top-center"
       })
        
       }
    }
    const increment =()=>{
      if (quantity<ProductDetail?.rating?.count) {
        setQuantity(quantity+1)
      }
    }

    const addBasket =()=>{
        dispatch(addToCart({
            id:ProductDetail?.id, title:ProductDetail?.title , image:ProductDetail?.image, price:ProductDetail?.price, quantity:quantity
        }))
        
    }

  return (
    <div className='flex items-center justify-center gap-10 my-10'>
        <img className='w-[500px] h-[500px]' src={ProductDetail?.image} />
        <div className='gap-10'>
         <div className='text-2xl font-bold'>{ProductDetail?.title} </div>
         <div className='my-2 text-xl text-red-500 '> Rating: {ProductDetail?.rating?.rate} </div>
         <div className='my-2 text-xl text-red-500'>Count: {ProductDetail?.rating?.count} </div>
         <div className='text-5xl font-bold'>Price: {ProductDetail?.price} <span className='text-sm'>TL</span> </div>
         
         <div className='my-2 mt-10'>{ProductDetail.description} </div>
         
         <div className='flex items-center gap-5 my-4'>
            <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
            <input className='w-12 mx-10 text-4xl font-bold text-center' type="text" value= {quantity} />
            <div onClick={increment} className='text-5xl cursor-pointer '>+</div>
         </div>
         <div onClick={addBasket} className='flex items-center justify-center h-16 text-xl bg-gray-200 border rounded w-[200px]'>Sepete Ekle</div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default DetailComp