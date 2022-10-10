function DeleteReview({id}){
    
    function handleClick(){
        fetch(`/reviews/${id}`,{method: "DELETE"})
        .then((r)=>r.json())
        .then()
        window.location.reload();
    }

    return(
        <button onClick={handleClick}>Delete Review</button>
    )
}
export default DeleteReview;