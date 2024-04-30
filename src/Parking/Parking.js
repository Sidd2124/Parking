import "./Parking.css"
const Parking=(props)=>{
    const{Item,MakeIrToReserved,AvailableMakeing}=props
    const {id, name, Status, VehchileType }=Item
    console.log(id)
    const UpdatetoReserved=()=>{
        MakeIrToReserved({...Item,Status:"Reserved"})
    }

    const UpdatetoAvailable=()=>{
        AvailableMakeing({...Item,Status:"Available"})
    }

   
    return(
        <div>
            {Status==="Available"?  <div className="container">
      <h3 className="info">{name}</h3>
      <h3 className="info" style={{color:'green'}}>{Status}</h3>
      <p className="info">VehchileType:  {VehchileType}</p>
      <div className="button-container">
        <button className="reserve-button" onClick={UpdatetoReserved}>Update to Reserved</button>
      </div>
    </div>: <div className="ReservedStatus">
            <h3>{Status} for {VehchileType} Parking</h3>
            <button className="ReserveButton" onClick={UpdatetoAvailable}>Update to Available</button>
        </div>}
        
       
        </div>
    )
}

export default Parking