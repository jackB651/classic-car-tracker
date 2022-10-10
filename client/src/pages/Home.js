import { useState, useEffect } from "react";
import React from "react";

function Home () {
  return (
           <>
             <h1>Classic Cars!</h1>
             <h2>Welcome to my site! Enjoy a listing of classic cars, and see which ones you like!</h2>
           </>
          )
}

export default Home;


//Graveyard

//history
//import {useHistory} from  "react-router-dom";

//map array to cards
//  const carsArray = cars.map((car)=>{
//         return <CarCard key = {car.id} car = {car}/>
//       })
//       return (
//         <ul className="cards">
//           {carsArray}
//         </ul>
//       );