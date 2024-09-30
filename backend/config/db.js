import mongoose from "mongoose";




export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chankama:2214@cluster0.n4f1ngy.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}