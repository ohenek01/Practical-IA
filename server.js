const express = require('express')
const mongoose = require('mongoose')
const Patients = require('./models/patients_model')
const app = express()

app.use(express.urlencoded({extended: false}))

app.post('/registration', async(req, res) => {
    try {
        const patient = await Patients.create(req.body)
        res.status(200).json(patient)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/registration/:id", async(req, res) => {
    try {
        const {id} = req.params
        const patient = await Patients.findById(id)
       res.status(200).json(patient) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/registration', async(req, res) => {
    try {
        const patient = await Patients.create(req.body)
        res.status(200).json(patient)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
})

app.get("/registration", async(req,res) => {
    try {
       const patient = await Patients.find({})
       res.status(200).json(patient) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://ohenek20:kwadwo03@practical-ia.xa0blzh.mongodb.net/praticals?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to mongodb')
    app.listen(3000, () => (
        console.log('Server is running on http://localhost:3000')
    ))
}).catch((error) => (
    console.log(error)
))