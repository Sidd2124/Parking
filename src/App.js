import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import  Info from  './Context/Context'
import Home from './Home/Home'
import Task from './Task/Task'
import PreviousParking from './PreviousParking/PreviousParking'
import CurrentParkings from './CurrentParkings/CurrentParkings'


import './App.css';

function App() {
  const [finelVehileType,setfinelVehileType]=useState("Car")
  const[notificationStatus,setnotificationStatus]=useState(false)
  const [optionStatus,setOptionStatus]=useState(false)
  const [currentBookingInfo,setcurrentBookingInfo]=useState( JSON.parse(localStorage.getItem("CurrentInLocal")))


  
  
  

  
  const GlobelUpdate=(Z)=>{
    setfinelVehileType(Z)
  }
  const Finishing=()=>{
    setnotificationStatus(!notificationStatus)
  }
  const Fixed=(R)=>{
    setnotificationStatus(false)
  
    localStorage.setItem("CurrentInLocal", JSON.stringify(R));
    const parsedObject = JSON.parse(localStorage.getItem("CurrentInLocal"));
    setcurrentBookingInfo(parsedObject);
  }

  const UpdateOptionStatus=()=>{
    setOptionStatus(!optionStatus)
  }
  return (
<Info.Provider value={{PickVehchileType:finelVehileType,GlobelVehchilUpdate:GlobelUpdate,WarningStatus:notificationStatus,Closeing:Finishing,Fix:Fixed,StatusOption:optionStatus,SetOptionStatus:UpdateOptionStatus,CurrentBookings:currentBookingInfo}}>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Task" component={Task} />
          <Route exact path="/PreviousParking" component={PreviousParking}/>
          <Route exact path="/CurrentParkings" component={CurrentParkings}/>
        </Switch>
      </BrowserRouter>

    </div>
    </Info.Provider>
  );
}

export default App;
