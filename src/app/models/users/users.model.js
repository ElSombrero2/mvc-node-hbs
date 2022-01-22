import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

export const Users = mongoose.model('Users', UserSchema)
