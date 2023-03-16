import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className=" nav">
    <img src="https://images.yourstory.com/cs/images/companies/16162243490201-1631082089969.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" id="logo"/>
        <h3 id="company">WASSERSTOFF</h3>
        <div className="form">
        <input type="text" placeholder=" Search..." className="searchitem" id="search"/>
           <button id="search1" className="searchitem">Search</button>
           </div>
           <div className="left">
            <a href="#" className="link">Statistics</a>
            <a href="#" className="link">Overview</a>
            <a href="#" className="link">Dashboard</a>
            <a href="#" className="link">Analytics</a>
           </div>
           
           
        </div>
   
    </>
  );
};

export default Navbar;