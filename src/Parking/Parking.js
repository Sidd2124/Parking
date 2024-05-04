import { useContext } from 'react'
import Info from '../Context/Context'
import WarnigPopUp from '../PopUp/PopUp'
import { withRouter } from 'react-router-dom'; 
import Reserved from '../Assets/Reserved.png'
import "./Parking.css"
const Parking = (props) => {
    
    const { WarningStatus, Closeing, Fix } = useContext(Info)
    const { Item, MakeIrToReserved } = props
    const { id, name, Status, VehchileType,ParkingPricePerHour    } = Item
    console.log(id)
    const UpdatetoReserved = () => {
        MakeIrToReserved({ ...Item, Status: "Reserved" })
        const CurrentTime = new Date()
        console.log(CurrentTime)
        Fix({ ...Item, Status: "Reserved", ExactTime: CurrentTime })
        const { history } = props;
        history.push("./CurrentParkings");
    }



    const Fool = () => {
        Closeing()
    }
    return (
        <div>
            {Status === "Available" ? <div className="container">
                <h3 className="info">{name}</h3>
                <h3 className="info" style={{ color: 'green' }}>{Status}</h3>
                <p className="info">VehchileType:  {VehchileType}</p>
                <div className="button-container">
                    <button className="reserve-button" onClick={UpdatetoReserved}>Reserve Your Parking</button>
                </div>
            </div> : <div>{WarningStatus ? <WarnigPopUp /> :
                <div className="ReservedStatus" onClick={Fool}>

                    <h3>{Status} for {VehchileType} Parking</h3>
                    <img className='Reserved' src={Reserved} alt="Reserved" />

                </div>}</div>}


        </div>
    )
}

export default  withRouter(Parking) 