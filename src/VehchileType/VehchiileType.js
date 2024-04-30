import "./VehchileType.css"

const VehchileType=(props)=>{
    const {VehchileTypeDetails,MainTypeUpdate,IsActive}=props
    const {Name,Logo}=VehchileTypeDetails
    const UpdetoMainType=()=>{
        MainTypeUpdate(Name)
    }

    const UpdatedStyling=IsActive?"First":"Second"
    return(
        <div className={UpdatedStyling}>
      <img className="VehchileTypeLogo" src={Logo} alt="Vehchile Type Logo" onClick={UpdetoMainType}/>
      </div>
    )
}

export default VehchileType