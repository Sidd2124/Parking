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
  const [currentBookingInfo,setcurrentBookingInfo]=useState( {})
  const [previousBooking,setPreviousBookings]=useState([])

useEffect(()=>{
const Make=localStorage.getItem("PreviousBookings")
if(Make){
  setPreviousBookings(JSON.parse(Make))
}
},[])

  useEffect(()=>{
    const DataFromLocalStorage=localStorage.getItem("CurrentInLocal")
    if(DataFromLocalStorage){
      setcurrentBookingInfo(JSON.parse(DataFromLocalStorage))
    }
   
  },[])
  
  

  
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

  const PreviouseParkingUpdate=(O)=>{
    localStorage.setItem("PreviousBookings",JSON.stringify([...previousBooking,O]))
    setPreviousBookings(JSON.parse(localStorage.getItem("PreviousBookings")))
  }
  return (
<Info.Provider value={{PickVehchileType:finelVehileType,GlobelVehchilUpdate:GlobelUpdate,WarningStatus:notificationStatus,Closeing:Finishing,Fix:Fixed,StatusOption:optionStatus,SetOptionStatus:UpdateOptionStatus,CurrentBookings:currentBookingInfo,PreviousBooking:previousBooking,AddtopreviouseParking:PreviouseParkingUpdate}}>
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
