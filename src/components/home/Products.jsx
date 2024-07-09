import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/ProductSlice'
import Loading from '../Loading'
import ProductList from '../ProductList'
import ReactPaginate from 'react-paginate'

const Products = ({category,sort}) => {
  const { products, productStatus } = useSelector(state => state.products)
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
 

  const dispatch = useDispatch()
  useEffect(() => {

    if (category) {
      dispatch(getCategoryProducts(category))
    }else{
      dispatch(getProducts())
      
    }

  }, [dispatch,category])

  return (
    <div>
      {
        productStatus == "LOADING" ? <Loading /> :
          <>
            <div className='flex flex-wrap'>
              {currentItems?.sort((a,b)=>sort == "inc" ? a.price-b.price : sort == "dec"? b.price-a.price :<p>Yaptığınız filtrelemeye göre ürün bulunamadı </p> ).map((product, i) => (
                <ProductList key={i} product={product} />
              ))}

            </div>
            <ReactPaginate
            className='paginate'
              breakLabel="..."
              nextLabel=" > "
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
            />
          </>
      }
    </div>
  )
}

export default Products