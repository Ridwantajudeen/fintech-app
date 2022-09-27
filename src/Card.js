import React from "react"
import masterLogo from "./masterLogo.png"

function Card(){
    return(
        <div className="card">
           <a href="/card" id="card"> 
           <div className="top">
            <div className="logoname"><h3 className="my">my</h3><h1>MONIE</h1>
            </div>
            <h1 className="virtual">VIRTUAL CARD</h1>
            </div>
           <div className="cardnum"><h1><span className="cardstar">****  ****  ****</span>  1234</h1></div>
           <div className="expire">12/22</div>
           <div className="mclogo"><img src={masterLogo} alt="" className="mcimage" /> </div>
           </a>
        </div>
    )
}
export default Card;