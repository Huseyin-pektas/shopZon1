import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CartCompo = ({cart}) => {
    const removeFromProduct = ()=>{
        dispatch(removeFromCart(cart.id))
        toast.success("Ürün Başarıyla silindi")
        
    }

    const dispatch = useDispatch()
  return (
    <div className='flex items-center justify-between my-10'>
        <img className='w-[150px] h-[150px] ' src={cart?.image}/>
        <div className='w-[298px]'>
            <div className='text-2xl ' >{cart?.title}</div>
        </div>
            <div className='text-2xl font-bold'>{cart?.price} tl ({cart?.quantity}) </div>
            <div onClick={removeFromProduct} className='text-white bg-red-500 w-[200px] rounded-md h-16 text-3xl flex items-center justify-center cursor-pointer'>Ürünü sil  </div>
            <ToastContainer/>
    </div>
  )
}

export default CartCompo