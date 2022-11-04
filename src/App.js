import React from 'react'
import Navbar from "./components/Navbar"
import Rent from "./components/Rent"
import FavouriteItems from './components/FavouriteItems'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Provider} from "react-redux"
import Footer from "./components/Footer.js"
import Store from "./components/Store"

const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Rent/>}/>
      <Route path="/favourite" element={<Rent/>}/>
      <Route path="/favitems" element={<FavouriteItems/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
