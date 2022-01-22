import mongoose from 'mongoose'

export async function registeDatabase() {
    try {
        await mongoose.connect(process.env.CS)
    }catch(e){ throw e }
}