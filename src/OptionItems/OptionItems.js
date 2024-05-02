import {Link} from "react-router-dom"
import { useContext } from 'react'
import  Info from '../Context/Context'
import Close from "../Assets/Close.gif"
import "./OptionItem.css"
const OptionItems=()=>{
    const{ SetOptionStatus}=useContext(Info)
    const UpdatingOptions=()=>{
        SetOptionStatus()
    }
    return(
        <div class="containers">
    <img class='Close' onClick={UpdatingOptions} src={Close} alt='Close'/>
    <Link  className="RemoveLink" to="/PreviousParking">
    <h3>Previous Parkings</h3>
    </Link>
    <Link className="RemoveLink" to="/CurrentParkings">
    <h3>Current Parkings</h3>
    </Link>
</div>

    )
}

export default OptionItems