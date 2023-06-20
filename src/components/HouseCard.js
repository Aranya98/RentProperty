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
          <img className="Houses" src={val.img} alt="" />
        <div className="House_row"> 
          <div>
          <h5>Location:{val.area}</h5>
          <h5>Rent:₹{val.price}/{val.priceType}</h5>
          </div>
        <div onClick={() => handleFavourite(val)}><img className="logo" src={val.favourite ? "https://cdn-icons-png.flaticon.com/512/1828/1828884.png": "https://cdn-icons-png.flaticon.com/512/1946/1946408.png"} alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default HouseCard