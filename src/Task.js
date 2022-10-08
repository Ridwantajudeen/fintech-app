import React from "react";
import {NavLink} from "react-router-dom"


function Task(){
  
    return(
        <div className="task">
            <div ><NavLink to="/transfer"><button className="tasklist"  >TRANSFER</button></NavLink></div>
            <div ><NavLink to="/airtime"><button className="tasklist">AIRTIME</button></NavLink></div>
            <div ><NavLink to="/history"><button className="tasklist">HISTORY</button></NavLink></div>
            <div ><button className="tasklist">MORE</button></div>

        </div>
    )
}

export default Task;