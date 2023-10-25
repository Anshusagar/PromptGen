import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('MongoDb Is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        isConnected = true;
    } catch (error) {
        console.log("Error connecting to Mongo",error)
    }
}