import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = ({ product }) => {
 const navigate = useNavigate()

    return (
        <div onClick={()=>navigate(`products/${product?.id}`)}
        className='relative p-2 mb-5 mx-2 border rounded-md w-[320px]'>
            <div className='absolute top-0 right-0 flex justify-end p-2 m-1 text-2xl text-white bg-black rounded-md cursor-pointer'>{product.price} ₺ </div>
            <img className='w-[200px] h-[200px] m-auto obj ' src={product?.image} />
            <div className='mt-2 text-xl font-bold text-center'> {product.title} </div>
            {/* <div className='p-2 font-bold text-left text-gray-400'> {product.description.slice(0, 120)} </div> */}
        </div>
    )
}

export default ProductList