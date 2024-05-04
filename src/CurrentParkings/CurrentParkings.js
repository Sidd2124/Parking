import { useContext,useState,useEffect } from "react"
import "./CurrentParkings.css"
import Info from "../Context/Context"
import axios from "axios"
const CurrentParkings=()=>{
const {CurrentBookings}=useContext(Info)
const{id, name, Status, VehchileType,ExactTime,ParkingPricePerHour}=CurrentBookings
const[secondfetch,setsecondfetch]=useState([])
const [ParkingCharge,SetParkingCharge]=useState(0)

useEffect(()=>{
GetTheData()
},[])

const GetTheData = async () => {
    try {
        const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"
        const ImportData = await axios.get(URL)
        const FinelInfo = ImportData.data

        const allData = Object.values(FinelInfo).flat();
        setsecondfetch(allData)
       

    } catch (error) {
        console.log(error)
    }
}




const UpdateSecondFinelData = async() => {
    const end = new Date();
   
    const durationInMillis = end.getTime() - new Date(ExactTime).getTime();
    const durationInHours = durationInMillis / (1000 * 60 * 60);
    const fee = Math.ceil(durationInHours) * ParkingPricePerHour; 
    
    SetParkingCharge(fee)
    const NewData = secondfetch.map((each) => {
      if (each.id === id) {
        return { ...CurrentBookings, Status: "Available" }; 
      }
      return each;
    });
    const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"
   const CurrentUpdate= await axios.put(URL,NewData)
   console.log(CurrentUpdate)
  };
  
    return(
        <div>
            {Object.keys(CurrentBookings).length===0?<h1>No Current Bookings</h1>:
            <div className="CurrentTOP">
            <div  >
            <h1>Current Parkings:</h1>
            <p>{ParkingPricePerHour} Rs</p>
            <p>{ParkingCharge}</p>

            <p>Your {VehchileType} In {name} Floor</p>
            <h3 className="Status">Your Parking Status <a href="jskjskd">{Status}</a></h3>
            <p>Your Parking Started from  {ExactTime}</p>
            <button onClick={UpdateSecondFinelData} className="button">Close Your Parking</button>
            </div>
            </div>
        }
        
        </div>
    )
}

export default CurrentParkings