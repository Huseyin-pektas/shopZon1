import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PagesContainer from './containers/PagesContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PagesContainer>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
    </PagesContainer>
      
    </>
  )
}

export default App
