import { Link } from 'react-router-dom';
import { useState } from 'react';
import Car from '../Assets/car.gif';
import Cycle from '../Assets/bike.gif';
import Bike from '../Assets/cycle.gif';
import CarPNG from '../Assets/CarPNG.png';
import BikePNG from '../Assets/BikePNG.png'
import CyclesPng from '../Assets/Cycle.png'
import VehchileType from '../VehchileType/VehchiileType';
import './Home.css';

const Vehchiles = [
   
    {
        Name: "Car",
        Logo: Car
    },
    {
        Name: "Bike",
        Logo: Bike
    },
    {
        Name: "Cycle",
        Logo: Cycle
    }
];

const Home = () => {
    const [chooseType, setchooseType] = useState("Car");

    const ChooseTypeUpdate = (F) => {
        setchooseType(F);
    };

    const VehchileTypeMainLogo = () => {
        switch (chooseType) {
            case "Car":
                return CarPNG;
            case "Bike":
                return BikePNG
            case "Cycle":
                return CyclesPng;
            default:
                return "";
        }
    };

    return (
        <div className='HomeTopLayer'>
            <div className='DescriptionLabel'>
                <h3>Welcome!</h3>
                <p className='Made'>Welcome to Pucnchavati Residence, where convenience meets comfort.</p>
                <h2>Parking Made Easy</h2>
<h3 className='vehicle'>Pick Your Vehchile to Park</h3>
            </div>
            <div className='TypesRow'>
                {Vehchiles.map((each) => <VehchileType key={each.Name} VehchileTypeDetails={each} MainTypeUpdate={ChooseTypeUpdate} IsActive={each.Name === chooseType} />)}
            </div>
           
<img className='BigLogo' src={VehchileTypeMainLogo()} alt="Car" />
<Link to="/Task" className="Link">
                <h1 className='Start'>Start Parking Your Vehicle</h1>
            </Link>
        </div>
    );
};

export default Home;
