import CarCard from "../components/CarCard";
import { useState, useEffect } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

function Cars(){
    const [cars, setCars] = useState([])

    const history = useHistory();

    useEffect(()=>{
        fetch("/cars") 
        .then(r=>r.json())
        .then(cars => setCars(cars))
    },[])
     
    const handle =()=>{history.push("/new_car")}

    const listCars = cars.map((car) =>
           <CarCard key={car.id} car={car}/>
        );
    return(
        <div>
            <div>
              {listCars}
            </div>
            <div>
               <p>Add new car:</p>
               <button onClick = {handle}>Create</button>
            </div>
        </div>
    )
}

export default Cars;