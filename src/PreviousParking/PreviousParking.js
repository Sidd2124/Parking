import { useContext } from "react"
import {Link} from 'react-router-dom'
import Zero from "../Assets/Zero.gif"
import HomeIcon from '../Assets/home.gif'
import "./PreviousParking.css"
import Info from "../Context/Context"

import PreviousParkingItem from '../PreviousParkingItems/PreviousParkingItem'

const PreviousParking=()=>{
    const {PreviousBooking}=useContext(Info)
    return(
        <div>


            {PreviousBooking.length===0? <div className="NoBookings">
                
                <h3 className="PreviousHeading">your Not Yet Parked in Panchavati Apartments</h3>
               
            <img className="Zero" src={Zero} alt="Zero"/>
           
            <Link to="./Task">
            <h1 className="Book">BOOK YOUR PARKING</h1>
            </Link>
            </div>:<div>
            <Link to="/">
            <img src={HomeIcon} alt="HomeIcon" className="HomeIcon"/>
            </Link>
                <h3 className="PreviousHeading">Your Previous Parking's</h3>
             
                <div className="FTouch">{PreviousBooking.map((each)=><PreviousParkingItem PreviousInfo={each}/>)}</div>
                </div>}

               
                
        </div>
        
        
    
    )
}

export default PreviousParking