import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mdrazik:13032005@cluster0.xs9qf8p.mongodb.net/food-del').then(()=> console.log("DB Connected!"));
}   