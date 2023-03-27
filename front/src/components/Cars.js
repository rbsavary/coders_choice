const Cars = (props) => {
 
    return (
        <>
            <img src={props.cars.image}/>
            <h3>Make: {props.cars.make}</h3>
            <h3>Model: {props.cars.model}</h3>
            <h3>Year: {props.cars.year}</h3>
            <h3>Color: {props.cars.color}</h3>
            <h3>Miles: {props.cars.make}</h3>
        </>
    )
}

export default Cars