import mongoose from 'mongoose'

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://loki:baby@cluster0.ssu4rlw.mongodb.net/foodie').then(() => console.log("DB Connected."));

}