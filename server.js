const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Cars = require('./models/cars.js')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.post('/cars', (req, res) => {
    Cars.create(req.body)
        .then((createdCar) => {
            res.json(createdCar)
    })
})

app.get('/cars', (req, res) => {
    Cars.find({})
        .then((foundCar) => {
            res.json(foundCar)
        })
})

app.delete('/cars/:id', (req, res) => {
    Cars.findByIdAndRemove(req.params.id)
        .then((deletedCar) => {
            res.json(deletedCar)
        })
})

app.put('/cars/:id', (req, res) => {
    Cars.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((updatedCar) => res.json(updatedCar))
})


app.listen(3000, () => {
    console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/carscrud')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});