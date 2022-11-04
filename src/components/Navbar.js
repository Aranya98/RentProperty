import React from 'react'
import { useNavigate } from "react-router-dom"
import "../App.css"


function App() {
  const Navigate = useNavigate()

  return (
    <div>

      <nav className='navbar'>
        <h3><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JHrdLpkryNneysHprdLqIGmQOhC0LeXiWg&usqp=CAU" alt="" />Estatery</h3>
        <h4 onClick={() => Navigate("/")}>Rent</h4>
        <h4>Buy</h4>
        <h4>Sell</h4>
        <select className="navSel">
          <option>Manage Property</option>
        </select>
        <select className="navSel">
          <option>Resources</option>
        </select>
        <h4 onClick={() => Navigate("/favitems")}>Favourite</h4>
        <button id="btn1">Login</button>
        <button id="btn2">Sign up</button>
      </nav>

    </div>
  );
}

export default App;
