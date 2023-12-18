const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        patientID:{
            type: Number,
            required: true,
        },
        surname:{
            type: String,
            required: true,
        },
        othernames:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        phoneNumber:{
            type: String,
            required: true,
        },
        residentialAddress:{
            type: String,
            required: true,
        },
        emergencyName:{
            type: String,
            required: true,
        },
        contact:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Patients = mongoose.model('patients', patientSchema)

module.exports = Patients;