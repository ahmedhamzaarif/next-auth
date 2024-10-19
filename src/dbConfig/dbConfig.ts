import mongoose from "mongoose";

export async function connect() {
    try {
        console.log('mdb', process.env.MONGO_URI!)
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB Connected')
        })
        
        connection.on('error', (err) => {
            console.log('MongoDb connection error. Please make sure db is up & running: ' + err)
            process.exit()
        })
        
    } catch (error) {
        console.log('Something went wrong in connecting to DB')
        console.log(error)
        
    }
}