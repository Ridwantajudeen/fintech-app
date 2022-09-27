import React from "react";


function Task(){
  
    return(
        <div className="task">
            <div ><a href="/transfer"><button className="tasklist"  >TRANSFER</button></a></div>
            <div ><a href="/airtime"><button className="tasklist">AIRTIME</button></a></div>
            <div ><a href="/history"><button className="tasklist">HISTORY</button></a></div>
            <div ><button className="tasklist">MORE</button></div>

        </div>
    )
}

export default Task;