import React from 'react'
import Transhead from './Transhead';
function Transferpage(){
    return(
        <div className='transferpage'>
            <Transhead />
            <h1 className='head'>TRANSFER</h1>
            <div className="balancetrans">
          
            <div className="bal-name">
                <h1>Avail. Bal:</h1>
                <h2 className="bal">$ 2000</h2>
           </div>
        </div>

            <form>
                
                <input className='amount' type={"number"} pattern="^\₹\d{1,3}(,\d{3})*(\.\d+)?$" placeholder="AMOUNT"/>
                <input className='acctnum'   placeholder="ACCOUNT NUMBER"/>
                <input className='bankname' type={"text"}  placeholder="BANK NAME"/>
                <input className='narration' type={"text"} placeholder="NARRATION"/>
                <button className='sendbtn'>SEND</button>
            </form>
        </div>
    )
}

export default Transferpage;