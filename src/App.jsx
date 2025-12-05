import './App.css'
import NavBarContainer from './components/NavBarContainer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App(){
  return (
    <BrowserRouter>
      <NavBarContainer/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartContainer />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>    
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
