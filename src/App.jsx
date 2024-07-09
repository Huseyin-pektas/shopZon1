import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PagesContainer from './containers/PagesContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {

  return (
    <>
    <PagesContainer>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="//products/:search" element={<Search />} /> */}
        
      </Routes>
    </BrowserRouter>
    </PagesContainer>
      
    </>
  )
}

export default App
