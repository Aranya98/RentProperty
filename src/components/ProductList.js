import React from 'react'
import HouseCard from './HouseCard'
import { useSelector } from "react-redux"


const ProductList = ({ main ,search}) => {

 
  const ProductItem = useSelector(state => state.product)
  const { item } = ProductItem

  return (
    <div id="container">

     {(search !== "") && item.filter(element => (element.area.toLowerCase().includes(search.toLowerCase()))).map(
        (item, ind) => <HouseCard val={item} id={ind} key={ind} />)}
       
      {main.length > 0 && search==""&&main.map((val) => <HouseCard val={val} />) }
      {main.length==0&&search==""&&item.map((val) => <HouseCard val={val} search={search} />)}
    </div>
  )
}

export default ProductList

