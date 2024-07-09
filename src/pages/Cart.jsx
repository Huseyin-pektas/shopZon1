import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import CartCompo from '../components/cart/CartCompo'
import { RiArrowGoBackFill } from "react-icons/ri";

const Cart = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { carts,itemCount,totalAmount } = useSelector(state => state.carts)

    console.log(carts,itemCount,totalAmount, "carts içinde ne var cart componenti")
    useEffect(() => {
        dispatch(getCartTotal())

    }, [dispatch])

    useEffect(() => {
        // location değiştiğinde çalışacak kod
        console.log("Current location:", location.pathname)
    }, [location])
    return (
        <div>
            {
                carts?.length > 0 ? <div>
                    {
                        carts.map((cart,i)=>(
                            <CartCompo key={i} cart={cart} />
                        ))
                    }
                    <div className='flex justify-end text-2xl font-bold border'>Toplam Tutar:  <span className='ml-5 text-3xl font-bold'> {totalAmount} TL </span></div>
                </div> :
                 <div className='flex items-center justify-center text-2xl h-28' onClick={()=>navigate("/")}>
                    Kartınız Boş .... Anasayfa 'ya Dön
                    <span className='ml-5'><RiArrowGoBackFill /></span>
                </div>
            }
        </div>

    )
}

export default Cart