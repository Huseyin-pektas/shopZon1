import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/ProductSlice'
import Loading from '../components/Loading'
import DetailComp from '../components/detail/DetailComp'

const Detail = () => {
    const navigate = useNavigate()

    const {id} = useParams()
     const dispetch = useDispatch()

 const {productDetailStatus,ProductDetail}= useSelector(state => state.products)

 useEffect(()=>{
dispetch(getDetailProduct(id))

 },[dispetch,id])

  return (
    <div>
        {
            productDetailStatus == "LOADING"? <Loading/>: <DetailComp ProductDetail={ProductDetail} />
        }
        <button onClick={()=>navigate("/")}>
            anasayfaya dön
        </button>
    </div>
  )
}

export default Detail