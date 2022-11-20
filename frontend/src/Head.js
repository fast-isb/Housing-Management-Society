import React from "react"
import "./Head.css"
import { NavLink } from "react-router-dom"

const Head = () => {

 

    return (
        <div >
            <nav>
               <ul>
                 <li>
                   <NavLink className="abc" to="/login">Login</NavLink>
                 </li>
                 <li>
                   <NavLink className="abc" to="/search">Search</NavLink>
                 </li>
                 <li>
                   <NavLink className="abc" to="/Contactus">Contact us</NavLink>
                 </li>
               </ul>
            </nav>
        </div>
    )
}

export default Head;