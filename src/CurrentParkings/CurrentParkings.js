import { useContext,useState,useEffect } from "react"
import "./CurrentParkings.css"
import Info from "../Context/Context"
import axios from "axios"
import RedCar from '../Assets/RedCar.png'
import BikeLogo from '../Assets/BikeLogo.png'
import CycleLogo from '../Assets/CycleLogo.png'
import Zero from "../Assets/Zero.gif"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const CurrentParkings=(props)=>{
const {CurrentBookings,Fix,AddtopreviouseParking}=useContext(Info)
const{id, name, Status, VehchileType,ExactTime,ParkingPricePerHour}=CurrentBookings
const[secondfetch,setsecondfetch]=useState([])


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

const ParkingLogo=()=>{
    switch(VehchileType){
case "Car":
return RedCar;
case "Bike":
    return BikeLogo;
    case "Cycle":
        return CycleLogo;
default:
     return null

    }
}


const UpdatingAgain=async()=>{
    const NewData = secondfetch.map((each) => {
        if (each.id === id) {
          return { ...CurrentBookings, Status: "Available" }; 
        }
        return each;
      });
      const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"
     const CurrentUpdate= await axios.put(URL,NewData)
     console.log(CurrentUpdate)
}

const FinelPreviouseParkings=()=>{
    AddtopreviouseParking({...CurrentBookings,ExactTime:new Date().toLocaleString()})
}

const UpdateSecondFinelData =() => {
    const end = new Date();
   
    const durationInMillis = end.getTime() - new Date(ExactTime).getTime();
    const durationInHours = durationInMillis / (1000 * 60 * 60);
    const fee = Math.ceil(durationInHours) * ParkingPricePerHour; 
    
   
 
  
    
        var options = {
          key: "rzp_test_juufusxwk4a9jj",
          key_secret:"ejXOtYG7NpnIoEztcocR",
          amount: fee *100,
          currency:"INR",
          name:"Panchavati ApartMents Parking Payment",
          description:"Thank you",
          handler: function(){
            
            UpdatingAgain()
            Fix({})
            FinelPreviouseParkings()
            const {history}=props
            history.push("/PreviousParking")
         
           
          },
          prefill: {
            name:"Sidd",
            email:"siddhumsd@gmail.com",
            contact:"9347877159"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
     
    

    
   
  };
  
    return(
        <div>
            {Object.keys(CurrentBookings).length===0? <div className="NoBookings">
                
                <h1>No Current Bookings</h1>
            <img className="Zero" src={Zero} alt="Zero"/>
            <h1>Book your Parking to Get Info Here</h1>
            <Link to="./Task">
            <h1 className="Book">BOOK YOUR PARKING</h1>
            </Link>
            </div>:
            <div className="CurrentTOP">
            <div  >
            <h1>Current Parkings:</h1>
           
           <img className="ParkingLogo" src={ParkingLogo()} alt={VehchileType}/>

            <p>Your {VehchileType} In {name} Floor</p>
            <h3 className="Status">Your Parking Status <a href="jskjskd">{Status}</a></h3>
            <h5>You'll be  Charge {ParkingPricePerHour}₹ Per Hour</h5>
            <p>Your Parking Started from  {new Date(ExactTime).toLocaleString()}</p>
            <button onClick={UpdateSecondFinelData} className="button">Close Your Parking</button>
            </div>
            </div>
        }
        
        </div>
    )
}

export default CurrentParkings