import React from "react";
import home from "./thehome.png"
import creditcard from "./creditcard.png"
import barcodescanner from "./barcodeicon.png"
import walleticon from "./wallet.png"

function Bottomicons(){
    return(
        <div className="icons">
            <div className="theicons">
                <a href="/"><img src={home} alt='' className="iconimage"/></a>
                <img src={barcodescanner} alt='' className="iconimage"/>
                <a href="/card" id="card"> <img src={creditcard} alt='' className="iconimage"/></a>
                <img src={walleticon} alt='' className="iconimage"/>
            </div>

        </div>
    )
}

export default Bottomicons;