import { useState } from "react";
function UpdateReview({id}){
   
    const [updatedRating, setUpdatedRating] = useState("")
    const [updatedReview, setUpdatedReview] = useState("")

    const info = {
        rating: updatedRating,
        review: updatedReview
    }
   
    const fetching = () =>{ 
        fetch(`/reviews/${id}`, {
           method:"PATCH",
           headers:{
            "Content-Type":"application/json"
           },
           body: JSON.stringify(info)
        })
        .then(r=>r.json())
        .then()
    }
    
    return(
        <form onSubmit={fetching}>
                <div>
                    <div>
                       <label htmlFor="Rating">Rating</label>
                       <input
                         type = "text"
                         id = "Rating"
                         autoComplete="off"
                         value={updatedRating}
                         onChange = {(e)=>setUpdatedRating(e.target.value)}
                       ></input>
                    </div>
                    <div>
                       <label htmlFor="Review">Review</label>
                       <input
                         type = "text"
                         id = "Review"
                         autoComplete="off"
                         value={updatedReview}
                         onChange = {(e)=>setUpdatedReview(e.target.value)}
                      ></input>
                    </div>
                    <div>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
     )
}
export default UpdateReview;