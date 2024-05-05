import { useState, useEffect, useContext } from "react"
import OptionItems from "../OptionItems/OptionItems"
import axios from 'axios'
import Parking from '../Parking/Parking'
import Option from '../Assets/Options.png'
import Info from '../Context/Context'
import HomeIcon from '../Assets/home.gif'


import "./Task.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Information =[
    { id: 1, name: 'A-1', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 2, name: 'A-2', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 3, name: 'A-3', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 4, name: 'A-4', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 5, name: 'A-5', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 6, name: 'A-6', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 7, name: 'A-7', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 8, name: 'A-8', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 9, name: 'A-9', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 10, name: 'A-10', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 11, name: 'A-11', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 12, name: 'A-12', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 13, name: 'A-13', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 14, name: 'A-14', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 15, name: 'A-15', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 16, name: 'A-16', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 17, name: 'A-17', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 18, name: 'A-18', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 19, name: 'A-19', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 20, name: 'A-20', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 21, name: 'B-1', Status: "Available", VehchileType: "Car", ParkingPricePerHour:20 },
    { id: 22, name: 'B-2', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 23, name: 'B-3', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 24, name: 'B-4', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 25, name: 'B-5', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 26, name: 'B-6', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 27, name: 'B-7', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 28, name: 'B-8', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 29, name: 'B-9', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 30, name: 'B-10', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 31, name: 'B-11', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 32, name: 'B-12', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 33, name: 'B-13', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 34, name: 'B-14', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 35, name: 'B-15', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 36, name: 'B-16', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 37, name: 'B-17', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 38, name: 'B-18', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 39, name: 'B-19', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    { id: 40, name: 'B-20', Status: "Available", VehchileType: "Car",ParkingPricePerHour:20 },
    
    { id: 41, name: 'A-1', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 42, name: 'A-2', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 43, name: 'A-3', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 44, name: 'A-4', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 45, name: 'A-5', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 46, name: 'A-6', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 47, name: 'A-7', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 48, name: 'A-8', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 49, name: 'A-9', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 50, name: 'A-10', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 51, name: 'A-11', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 52, name: 'A-12', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 53, name: 'A-13', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 56, name: 'A-16', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 57, name: 'A-17', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 58, name: 'A-18', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 59, name: 'A-19', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 60, name: 'A-20', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 61, name: 'B-1', Status: "Available", VehchileType: "Bike", ParkingPricePerHour:10 },
    { id: 62, name: 'B-2', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 63, name: 'B-3', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 64, name: 'B-4', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 65, name: 'B-5', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 66, name: 'B-6', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 67, name: 'B-7', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 68, name: 'B-8', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 69, name: 'B-9', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 70, name: 'B-10', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 71, name: 'B-11', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 72, name: 'B-12', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 73, name: 'B-13', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 74, name: 'B-14', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 75, name: 'B-15', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 76, name: 'B-16', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 77, name: 'B-17', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 78, name: 'B-18', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 79, name: 'B-19', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    { id: 80, name: 'B-20', Status: "Available", VehchileType: "Bike",ParkingPricePerHour:10 },
    
    
    { id: 81, name: 'A-1', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5},
    { id: 82, name: 'A-2', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 83, name: 'A-3', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 84, name: 'A-4', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 85, name: 'A-5', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 86, name: 'A-6', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 87, name: 'A-7', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 88, name: 'A-8', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 89, name: 'A-9', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 90, name: 'A-10', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 91, name: 'A-11', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 92, name: 'A-12', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 93, name: 'A-13', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 96, name: 'A-16', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 97, name: 'A-17', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 98, name: 'A-18', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 99, name: 'A-19', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 100, name: 'A-20', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 101, name: 'B-1', Status: "Available", VehchileType: "Cycle", ParkingPricePerHour:5 },
    { id: 102, name: 'B-2', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 103, name: 'B-3', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 104, name: 'B-4', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 105, name: 'B-5', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 106, name: 'B-6', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 107, name: 'B-7', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 108, name: 'B-8', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 109, name: 'B-9', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 110, name: 'B-10', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 111, name: 'B-11', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 112, name: 'B-12', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 113, name: 'B-13', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 114, name: 'B-14', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 115, name: 'B-15', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 116, name: 'B-16', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 117, name: 'B-17', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 118, name: 'B-18', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 119, name: 'B-19', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    { id: 120, name: 'B-20', Status: "Available", VehchileType: "Cycle",ParkingPricePerHour:5 },
    
    
    ]
const Task = () => {
    const [finelData, setFinelData] = useState([])
    const { PickVehchileType,StatusOption ,SetOptionStatus} = useContext(Info)

    useEffect(() => {
        GetTheData()
    }, [])

    const GetTheData = async () => {
        try {
            const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"
            const ImportData = await axios.get(URL)
            const FinelInfo = ImportData.data

            const allData = Object.values(FinelInfo).flat();
            setFinelData(allData)

        } catch (error) {
            console.log(error)
        }
    }


    const PostData = async () => {


        try {
            const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"

            const Data = await axios.post(URL, Information)
            console.log(Data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(PostData)

    const UpdateData = async (D) => {
        const NewData = finelData.map((each) => {
            if (each.id === D.id) {
                return D
            }
            return each


        })
        setFinelData(NewData)
        console.log(finelData)
        try {
            const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"

            const DataBase = await axios.put(URL,
                NewData
            )

            console.log(DataBase)
            
        } catch (error) {
            console.log(error)
        }

    }


const UpdateOptionStatus=()=>{
    SetOptionStatus()
}


    const FinleUpdatedData = finelData.filter((each) => each.VehchileType === PickVehchileType)
    const ABlock = FinleUpdatedData.filter((each) => each.name.includes("A"))
    const BBlock = FinleUpdatedData.filter((each) => each.name.includes("B"))
    return (
        <div>
             
            <div className="OptionsContainer">
                
                {StatusOption===false&&
<img className="OptionsIcon" src={Option} alt="Options" onClick={UpdateOptionStatus}/>}
            <h1 className="SlotName">Ground Level-A</h1>
            <Link to="/">
            <img src={HomeIcon} alt="HomeIcon" className="HomeIcon"/>
            </Link>
            </div>
            {StatusOption&&<OptionItems/>}
            <div className="ParkingItems">
              
                {ABlock.map((each) => <Parking Item={each} keys={each.id} MakeIrToReserved={UpdateData}  />)}
            </div>
            <h1 className="SlotName">Ground Level-B</h1>
            <div className="ParkingItems">

                {BBlock.map((each) => <Parking Item={each} keys={each.id} MakeIrToReserved={UpdateData}  />)}

            </div>
        </div>
    )
}

export default Task