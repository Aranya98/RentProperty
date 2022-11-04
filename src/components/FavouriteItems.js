import React from 'react'
import {useSelector} from "react-redux"

const FavouriteItems = () => {


const ProductList=useSelector(state=>state.product.favItem)

  return (
    <div>
      <center><h2>Favourite Property List</h2></center>
     {ProductList.map((item)=>
      <div id="favContainer">
        <img className="Houses" src={item.img} alt=""/>
        <h3>Rent:₹{item.price}/{item.priceType}</h3>
        <h5>Location:{item.area}</h5>
        <h5>Property Type:{item.propertyType}</h5>
      </div>
     )}
    </div>
  )
}

export default FavouriteItems
