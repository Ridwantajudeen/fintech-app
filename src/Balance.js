import React from "react"
import notify from "./notificationicon.png"

function Balance(){
    return(
        <div className="balance">
          
            <div className="bal-name">
                <h1>Avail. Bal:</h1>
                <h2 className="bal">$ 2000</h2>
            


           </div>
           <img src={notify} alt='' className="notify"/>
        </div>
    )
}

export default Balance