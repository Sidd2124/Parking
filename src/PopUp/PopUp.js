import { useContext } from 'react'
import Info from '../Context/Context'
import Munna from '../Assets/Bramhi.jpg'
import Close from "../Assets/Close.gif"
import "./PopUp.css"
const WarnigPopUp=()=>{
    const {Closeing}=useContext(Info)
    const UpdateToClose=()=>{
        Closeing()
    }
    return(
        <div className="PopUpMain">
            <img src={Close} alt="Close" className='Close' onClick={UpdateToClose}/>
            <img className='Munna' src={Munna} alt="BSDK"/>
            <p1 className="Text">Sorry Bro This Slot Reserved</p1>
            
            
        </div>
    )
}

export default WarnigPopUp