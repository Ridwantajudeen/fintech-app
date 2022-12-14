import React from "react";
import {NavLink} from "react-router-dom"

function History(){
    return(
        <div className="history" >
           <div className="transaction">
                <h2 className="recent">Recent history</h2>
                <NavLink to="/history" id="hist">
                    <div className="alart"><h1 className="alartname">Martin Chris</h1><h1 className="debalartamount">-$16</h1></div>
                <div className="alart"><h1 className="alartname">Bryan Main</h1><h1 className="alartamount">$20</h1></div>
                <div className="alart"><h1 className="alartname">Ellisa Mama</h1><h1 className="alartamount">$82</h1></div>
                <div className="alart"><h1 className="alartname">Eniola Ajala</h1><h1 className="debalartamount">-$12</h1></div>
                </NavLink>
            </div>
            
        </div>
       
    )
}

export default History;