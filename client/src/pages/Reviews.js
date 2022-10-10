import { useState, useEffect } from "react";
import ReviewCard from "../components/ReviewCard.js";
import React from 'react';
import DeleteReview from "../components/DeleteReview.js";

function Reviews(){

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch("/reviews") 
        .then(r=>r.json())
        .then(reviews => setReviews(reviews))
    },[])
   console.log(reviews)
    const listReviews = reviews.map((review) => 
        <ReviewCard review = {review}/>
        );
    return(
        <div>
            <h2>reviews</h2>
            {listReviews}
        </div>
    )
}

export default Reviews;