import React from "react";
import back from "./left-arrow-icon.png"
import {NavLink} from "react-router-dom"

function Transhead(){
    return(
        <div className="transhead">
        <div className="navbar">
          <NavLink to="/"><img src={back} alt="" className="backarrow"/></NavLink>
          <div className="navname"><h3 className="my">my</h3><h1>MONIE</h1></div>
          </div>
        </div>
    )
}

export default Transhead;