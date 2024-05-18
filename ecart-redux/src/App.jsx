import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'

function App() {


  return (
    <>
      <Header/>
      <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'*'} element={<PageNotFound/>} />
          <Route path={'/wishlist'} element={<Wishlist/>} />
          <Route path={'/cart'} element={<Cart/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
