import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        mongoose.connection.on('Connected', ()=> console.log('MongoDB Connected'))
        await mongoose.connect(process.env.MONGODB_URI as string)
    } catch (error) {
        console.error('Error connecting to MongoDB', error)
    }
}

export default connectDB;