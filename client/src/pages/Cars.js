import CarCard from "../components/CarCard";
import { useState, useEffect } from "react";
import React from "react";
import NewCar from "./NewCar";

function Cars(){
    const [cars, setCars] = useState([])

    useEffect(()=>{
        fetch("/cars") 
        .then(r=>r.json())
        .then(cars => setCars(cars))
    },[])
     
    const listCars = cars.map((car) =>
           <CarCard key={car.id} car={car}/>
        );
    return(
        <div>
            <div>
              {listCars}
            </div>
            <div>
               <NewCar/>
            </div>
        </div>
    )
}

export default Cars;