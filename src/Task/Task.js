import { useState, useEffect } from "react"
import axios from 'axios'
import Parking from '../Parking/Parking'
import "./Task.css"
const Task = () => {
    const [finelData, setFinelData] = useState([])
    const [filterVehchileType,setfilterVehchileType]=useState("")

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

            const Data = await axios.post(URL, [
                { id: 1, name: 'Slot  1', Status: "Available", VehchileType: "Car" },
                { id: 2, name: 'Slot  2', Status: "Available", VehchileType: "Bike" },
                { id: 3, name: 'Slot  3', Status: "Available", VehchileType: "Cycle" }
            ])
            console.log(Data)
        } catch (error) {
            console.log(error)
        }
    }


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
                finelData
            )
            console.log(DataBase)
        } catch (error) {
            console.log(error)
        }

    }


    const MakeingAvailable = async (J) => {
        const AvailableFilter = finelData.map((each) => {
            if (each.id === J.id) {
                return J
            }
            return each
        })

        setFinelData(AvailableFilter)
        try {

            const URL = "https://park-6926c-default-rtdb.firebaseio.com/Sidd.json"
            const Filter = await axios.put(URL, finelData)
            console.log(Filter)
        } catch (error) {
            console.log(error)
        }

    }


    const UpdateVehchileType=(e)=>{
        setfilterVehchileType(e.target.value)
    }

const FinleUpdatedData=finelData.filter((each)=>each.VehchileType===filterVehchileType)
    return (
        <div>
             
   
            <div>
                {finelData.map((each) => <Parking Item={each} keys={each.id} MakeIrToReserved={UpdateData} AvailableMakeing={MakeingAvailable} />)}
            </div>
        </div>
    )
}

export default Task