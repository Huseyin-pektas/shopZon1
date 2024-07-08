import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Products from '../components/home/Products'
import Category from '../components/home/Category'

const Home = () => {

  const [sort, setSort] = useState("")
  const [category, setCategory] = useState("")
  return (
    <div>
      <div>
        <SliderComp />
       <Sorting/>
       <div className='flex'>
        <Category/>
        <Products/>
       </div>

      </div>
    </div>
  )
}

export default Home