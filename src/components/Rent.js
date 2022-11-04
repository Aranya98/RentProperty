import React, { useState } from 'react'
import ProductList from "./ProductList"
import { useSelector } from 'react-redux'
const Rent = () => {
  const data = useSelector(state => state.product)
  const { item } = data
  const [main, setMain] = useState([])
  const [loc, setLoc] = useState("")
  const [date, setDate] = useState()
  const [price, setPrice] = useState(0)
  const [type, setType] = useState("")
  const[search,setSearch]=useState("")

  const SearchList = () => {
    let obj1 = { A: 500, B: 2501, C: 3501, D: 4501 }
    let obj2 = { A: 2500, B: 3500, C: 4500, D: 6000 }
    let p1, p2
    for (let i in obj1) {
      if (i == price) {
        p1 = obj1[i]
      }
    }
    for (let i in obj2) {
      if (i == price) {
        p2 = obj2[i]
      }
    }
    let f1 = item.filter(val => val.area == loc)
    let f2 = f1.filter(val => val.date != date)
    let f3 = f2.filter(val => val.price >= p1 && val.price <= p2)
    let f4 = f3.filter(val => val.propertyType == type)
    setMain(f4)
    console.log(f4)
  }

  return (
    <div>

      <div className="header">
        <h1>Search properties to rent</h1>
        <input id="priceRange" type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Please enter your area"/>
         
      </div>
      <div>

        <div className="searchType">

          <div style={{ margin: "50px 0px 50px 0px" }}>
            <label className="lab">Location</label><br />
            <select className="sel" onChange={(e) => setLoc(e.target.value)}>

              <option >Select Location</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mumbai">Mumbai</option>

            </select>
          </div>

          <div>
            <label className="lab">When</label><br />
            <input type="date" onChange={(e) => setDate(e.target.value)} id="dte" />
          </div>

          <div>
            <label className="lab">Prices</label><br />
            <select  className="sel" onChange={(e) => setPrice(e.target.value)} >
              <option>Select Price</option>
              <option value="A">₹500-₹2500</option>
              <option value="B">₹2501-₹3500</option>
              <option value="C">₹3501-₹4500</option>
              <option value="D">₹4501-₹6000</option>
            </select>
          </div>

          <div>
            <label className="lab">Property Type</label><br />
            <select  className="sel" onChange={(e) => setType(e.target.value)} >
              <option>Property Type</option>
              <option value="house">Houses</option>
              <option value="flat">flats</option>
            </select>

          </div>
          <button id="btn3" onClick={() => SearchList()}>Search</button>



        </div>
        <ProductList main={main} search={search}/>
      </div>
    </div>
  )
}

export default Rent
