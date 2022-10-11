import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function NewCar(){
    
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [url, setUrl] = useState("")

  const history = useHistory();

        function handleSubmit(e){
            e.preventDefault()
            const postString = {
              make,
              model,
              year,
              url
            }
            fetch('/cars',{
              method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body: JSON.stringify(postString)
              })
              .then(r=>r.json())
              .then(history.push("/cars"))
        }

    return(
       <div> 
        <h1>New Car!</h1>     
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="make">Make:</label>
              <input
                type = "text"
                id = "make"
                autoComplete="off"
                value={make}
                onChange = {(e)=>setMake(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="model">Model:</label>
              <input
                type = "text"
                id = "model"
                autoComplete="off"
                value={model}
                onChange = {(e)=>setModel(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="year">Year:</label>
              <input
                type = "text"
                id = "year"
                autoComplete="off"
                value={year}
                onChange = {(e)=>setYear(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="url">Picture:</label>
              <input
                type = "text"
                id = "url"
                autoComplete="off"
                value={url}
                onChange = {(e)=>setUrl(e.target.value)}
              ></input>
            </div>
                <button type="submit">
                    Create
                </button>
          </form>
        </div>
      </div>
    )
}
export default NewCar;