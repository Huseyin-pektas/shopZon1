import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/ProductSlice'
import Loading from '../Loading'
import ProductList from '../ProductList'

const Products = () => {
  const { products, productStatus } = useSelector(state => state.products)

  const dispatch = useDispatch()
  console.log(products)
  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])
  return (
    <div>
      {
        productStatus == "LOADING" ? <Loading /> :
          <div>
            {products?.map((product, i) => (
              <ProductList key={i} product={product} />
            ))}
          </div>
      }
    </div>
  )
}

export default Products