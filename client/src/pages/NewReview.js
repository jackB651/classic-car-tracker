import { useEffect, useState } from "react";

function NewReview(){
   
   const [rating, setRating] = useState("")
   const [review, setReview] = useState("")
   const [cars, setCars] = useState([])
   const [carId, setCarId] = useState("")

   useEffect(()=>{
    fetch(`/cars`)
    .then(r=>r.json())
    .then(resp=>setCars(resp))
   },[])

   const optionArray = cars.map(car => 
    <option value={car.id}>{car.make} {car.model}</option>
    )
    
    
    function handleSubmit(e){
        e.preventDefault()
        const car_for_post = cars.find(car => car.id == carId)
      console.log(car_for_post.id)
      const carData = {
        rating,
        review,
        car_id: car_for_post.id,
        user_id: 17
    }
        fetch(`/reviews`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
             body: JSON.stringify(carData)})
             .then(r=>r.json())
             .then(response=>console.log(response))
    }

    return(
       <div>
        <form onSubmit = {handleSubmit}>
            <div>
              <label htmlFor="review">Review:</label>
              <input
                type = "text"
                id = "review"
                autoComplete="off"
                value={review}
                onChange = {(e)=>setReview(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type = "text"
                id = "rating"
                autoComplete="off"
                value={rating}
                onChange = {(e)=>setRating(e.target.value)}
              ></input>
            </div>
            <label>Car: .</label>
            <select onChange={(e)=>setCarId(e.target.value)}>
                {optionArray}
            </select>
            <div>
                <button type="submit">
                    Create
                </button>
            </div>
        </form>
       </div>
    )
}
export default NewReview;