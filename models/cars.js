const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema ({
    year: Number,
    make: String,
    model: String,
    color: String,
    miles: Number,
    image: String
})

const Cars = mongoose.model('Cars', carsSchema)

module.exports = Cars