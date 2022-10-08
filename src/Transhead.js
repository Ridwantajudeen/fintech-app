import React from "react";
import back from "./left-arrow-icon.png"
import { useHistory} from "react-router-dom"

function Transhead(){
  let history = useHistory();
    return(
        <div className="transhead">
        <div className="navbar">
          {/* <NavLink to="/"> */}
            <img src={back} alt="" onClick={history.goBack} className="backarrow"/>
            {/* </NavLink> */}
          <div className="navname"><h3 className="my">my</h3><h1>MONIE</h1></div>
          </div>
        </div>
    )
}

export default Transhead;