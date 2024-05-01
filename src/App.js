import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import  Info from  './Context/Context'
import Home from './Home/Home'
import Task from './Task/Task'


import './App.css';

function App() {
  const [finelVehileType,setfinelVehileType]=useState("Car")
  const[notificationStatus,setnotificationStatus]=useState(false)
  const GlobelUpdate=(Z)=>{
    setfinelVehileType(Z)
  }
  const Finishing=()=>{
    setnotificationStatus(!notificationStatus)
  }
  const Fixed=()=>{
    setnotificationStatus(false)
  }
  return (
<Info.Provider value={{PickVehchileType:finelVehileType,GlobelVehchilUpdate:GlobelUpdate,WarningStatus:notificationStatus,Closeing:Finishing,Fix:Fixed}}>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Task" component={Task} />
        </Switch>
      </BrowserRouter>

    </div>
    </Info.Provider>
  );
}

export default App;
