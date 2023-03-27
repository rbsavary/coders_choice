import { useState } from 'react'

const Add = (props) => {
    const [cars, setCars] = useState({year: 0, make: '', model: '', color: '', miles: 0, image: ''})


    const handleChange = (event) => {
        setCars({...cars, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(cars)
    }




    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="make">Make: </label>
                <input type="text" name='make' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="model">Model: </label>
                <input type="text" name='model' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="year">Year: </label>
                <input type="number" name='year' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="miles">Miles: </label>
                <input type="number" name='miles' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="color">Color: </label>
                <input type="text" name='color' onChange={handleChange} />
                <br/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name='image' onChange={handleChange} />
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default Add