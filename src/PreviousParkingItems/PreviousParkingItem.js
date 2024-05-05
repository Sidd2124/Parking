import Verified from "../Assets/Verfied.png"
import "./PreviousParkingItem.css"
const PreviousParkingItem = (props) => {
    const { PreviousInfo } = props
    const { name, VehchileType, ExactTime } = PreviousInfo
    return (
        <div class="container">
        <h3 class="text"> We Take Care of Your {VehchileType} in {name} Block</h3>
       <h3 class="text">Your Parking End On {ExactTime}</h3>
       <h3 className="text">Payment Status</h3>
       <img className="Verified" src={Verified} alt="Verified"/>
       <p>* Show This at Panchavati Security for Easy Checkout</p>
    </div>
    
    )
}

export default PreviousParkingItem