import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, changeFavValue } from "./ProductReducer"


const HouseCard = (props) => {
  const { val } = props;

  const dispatch = useDispatch()
  const data=useSelector(state=>state.product)
const{favItem}=data

  const handleFavourite = (product) => {
    
    let fav=product.favourite
    dispatch(changeFavValue({id:product.id, value: !fav}));
    
    if (!product.favourite) {
      dispatch(addItem(product));
    }
    else {
      favItem.map((item,index)=>{
        if(product.id==item.id){
          dispatch(removeItem({id:index}))
          return true
        }
        else{
          return false
        }
      }
      )
      
    }
    console.log(favItem)
  }
  return (
    <>
      <div className="containerChild">
        <div>
          <img className="Houses" src={val.img} alt="" />
          <h5>Location:{val.area}</h5>
          <h5>Rent:₹{val.price}/{val.priceType}</h5>
        </div>
        <div onClick={() => handleFavourite(val)}><img className="logo" src={val.favourite ? "https://www.skynavgps.com/images/feature.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWMg9JtBWhK5HFEvEROSHZtL5mT6B3jXqtT89o77sy5TScflugTGDnOdGIBygl6XUhgU&usqp=CAU"} alt="" /></div>
      </div>
    </>
  )
}

export default HouseCard