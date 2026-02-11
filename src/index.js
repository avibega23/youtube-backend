import dotenv from "dotenv"
import dbConnect from "../src/db/dbConnect.js"
import {app} from "./app.js"

dotenv.config({
	path: './.env'
})

const PORT = process.env.PORT || 8000

dbConnect()
.then(()=>{
	const server = app.listen(PORT ,()=>{
		console.log(`Server running at PORT ${PORT}`)
	})

	server.on("error",(err) => {
		console.error("Server error:",err)
	})
})
.catch((err)=>{
	console.log("Mongo DB Connection Failed !!!",err);
})

