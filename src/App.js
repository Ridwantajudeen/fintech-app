
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React from "react"
import Balance from './Balance';
import Card from './Card';
import Task from './Task';
import History from './History';
import Bottomicons from './Bottomicons';
import background from './appbackground.jpg'
import Transferpage from './Transferpage';
import Airtime from './Airtimepage';
import Historypage from './historypage';
import Carddetails from './Carddetails';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>
      <Switch>
      <Route exact path={"/"}>
     <Balance />
     <Card/>
     <Task />
     <History />
     </Route>
     </Switch>
     
      <Switch>
      <Route exact path={"/transfer"}>
        <Transferpage />
      </Route>
     </Switch>
      <Switch>
      <Route exact path={"/airtime"}>
        <Airtime />
      </Route>
     </Switch>
     <Switch>
      <Route exact path={"/history"}>
        <Historypage />
      </Route>
     </Switch>
     <Switch>
      <Route exact path={"/card"}>
        <Carddetails />
      </Route>
     </Switch>
     </Router>
     <Bottomicons />
     
    </div>
  );
}

export default App;
