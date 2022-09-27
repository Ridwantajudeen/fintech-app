import React from "react";
import Transhead from "./Transhead";
import masterLogo from './masterLogo.png'

function Carddetails(){
    return(
        <div className="carddetails">
             <Transhead />
            <h1 className='head'>CARD DETAILS</h1>
            <div className="cardd">
           
           <div className="top">
            <div className="logoname"><h3 className="my">my</h3><h1>MONIE</h1>
            </div>
            <h1 className="virtual">VIRTUAL CARD</h1>
            </div>
           <div className="cardnumd"><h1>1234  1234  1234  1234</h1></div>
           <div className="expire">12/22</div>
           <div className="mclogo"><img src={masterLogo} alt="" className="mcimage" /> </div>
           
        </div>
        <div className="det"> <h1>CARD NAME:</h1><h3 className="ddet">Ridwan Tajudeen</h3></div>
        <div className="det"> <h1>CARD NUMBER:</h1><h3 className="ddet">1234  1234  1234  1234</h3></div>
        <div className="det"> <h1>CVV:</h1><h3 className="ddet">123</h3></div>
        <div className="det"> <h1>EXPIRY:</h1><h3 className="ddet">12/22</h3></div>
        <div className="det"> <h1>ADDRESS:</h1><h3 className="ddet">213 ave, Somewhere in the world. </h3></div>
        <button className="freezecard">FREEZE CARD</button>
        <button className="newcard">NEW CARD</button>
        
        </div>
    )
}

export default Carddetails;