import React from 'react'

const ProductList = ({ product }) => {
    return (
        <div className='relative p-2 m-2 border rounded-md w-30'>
            <div>
                <div className='text-xl font-bold text-center'>Ürün Adı: {product.title} </div>

            </div>
            <div className='absolute top-0 right-0 flex justify-end p-2 m-1 text-2xl text-white bg-black rounded-md cursor-pointer'>{product.price} ₺ </div>
            <img className='w-40 h-[150px] m-auto ' src={product?.image} />
                <div className='p-2 text-xl font-bold text-center'> {product.category} </div>
            <div className='p-2 font-bold text-left text-gray-400'> {product.description.slice(0,120)} </div>
        </div>
    )
}

export default ProductList