import React from "react";
import back from "./left-arrow-icon.png"

function Transhead(){
    return(
        <div className="transhead">
        <div className="navbar">
          <a href="/"><img src={back} alt="" className="backarrow"/></a>
          <div className="navname"><h3 className="my">my</h3><h1>MONIE</h1></div>
          </div>
        </div>
    )
}

export default Transhead;