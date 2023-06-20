import React from 'react'
import { useNavigate } from "react-router-dom"
import "../App.css"


function App() {
  const Navigate = useNavigate()

  return (
    <div>

      <nav className='navbar'>
        <h3 style={{cursor:"pointer"}} onClick={() => Navigate("/")}><img className="logo" src="https://cdn-icons-png.flaticon.com/512/602/602270.png" alt="logo" />RentEasy</h3>
        <div>
        <h4 style={{cursor:"pointer"}} onClick={() => Navigate("/")}>Rent</h4>
        {/* <h4>Buy</h4>
        <h4>Sell</h4> */}
        {/* <select className="navSel">
          <option>Manage Property</option>
        </select>
        <select className="navSel">
          <option>Resources</option>
        </select> */}
        <h4 style={{cursor:"pointer"}} onClick={() => Navigate("/favitems")}>Favourite</h4>
        </div>
        {/* <button id="btn1">Login</button>
        <button id="btn2">Sign up</button> */}
      </nav>

    </div>
  );
}

export default App;
