function CarCard({car}){
    return(
        <div>
            <h3>{`Car ${car.id}: ${car.make}`}</h3>
            <img scr = {car.url} alt = {car.model}/>
            <p>{`${car.year} ${car.make} ${car.model}`}</p>
        </div>
    )
}

export default CarCard;