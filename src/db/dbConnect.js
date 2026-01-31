import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const dbConnect =async ()=>{
	try{
		const mongoinstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`) 
		console.log(`\n MongoDB Connected !! DB HOST : ${mongoinstance.connection.host}`)
	} catch (error){
		console.log("ERROR::DB:: ",error)
		process.exit(1)
	}
}


export default dbConnect;
