import React from 'react'
import {useSelector} from "react-redux"

const FavouriteItems = () => {


const ProductList=useSelector(state=>state.product.favItem)

  return (
    <div>
        <table>
  <caption><h2>Favourite Property List</h2></caption>
  <thead>
    <tr>
      <th scope="col">Houses</th>
      <th scope="col">Rent</th>
      <th scope="col">Location</th>
      <th scope="col">Property Type</th>
    </tr>
  </thead>
     {ProductList.map((item)=>
      
          <tbody>
            <tr>
      <td className="favImg"  data-label="Account"><img className="Houses1" src={item.img} alt={item.name}/></td>
      <td data-label="Due Date">₹{item.price}/{item.priceType}</td>
      <td data-label="Amount">{item.area}</td>
      <td data-label="Period">{item.propertyType}</td>
    </tr>
          </tbody>
          // <tr>
          //   <td><img className="Houses1" src={item.img} alt={item.name}/></td>
          //   <td>₹{item.price}/{item.priceType}</td>
          //   <td>{item.area}</td>
          //   <td>{item.propertyType}</td>
          // </tr>

)}
</table>
    </div>
  )
}

export default FavouriteItems
