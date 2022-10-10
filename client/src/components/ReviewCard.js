import { useState } from "react";
import UpdateReview from "../components/UpdateReview.js";
import DeleteReview from "./DeleteReview.js";

function ReviewCard({review}){

    const [edit, setEdit] = useState(false)
  

    const handleClick = () => {
        setEdit(!edit)
    }

    return(
        <div>
            <div>
                <h4>{`${review.car.year} ${review.car.make} ${review.car.model}`}</h4>
                <p>Rating: {review.rating}</p>
                <p>Review: {review.review}</p>
                {edit ? <UpdateReview id = {review.id}/> : ""}
                <button onClick={handleClick}>{edit ? "Cancel" : "Edit"}</button>
                <DeleteReview id = {review.id}/>
            </div>
        </div>
    )
}

export default ReviewCard;