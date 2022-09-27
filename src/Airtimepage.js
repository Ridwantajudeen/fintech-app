import React from "react";
import Transhead from "./Transhead";



function Airtime(){
    return(
        <div className="airtime">
            <Transhead/>
            <h1 className='head'>AIRTIME</h1>
            
             <form>
      <select className="network" >
        NETWORK
      
        <option defaultValue className="mtn">MTN</option>
        <option value="glo"id="glo">GLO</option>
        <option value="airtel" id="airtel">AIRTEL</option>
        <option value="9mobile" id="ninemobile">9MOBILE</option>
      </select>
      <input type={"tel"} id="tel" placeholder="Phone Number"/>
      <input type={"number"} id="airtimeamount" placeholder="Amount" />
      <button className="airtimebtn">CONTINUE</button>
     
    </form>
            
           
            
        </div>
    )
}

export default Airtime;