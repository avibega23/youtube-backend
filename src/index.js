import dotenv from "dotenv"
import dbConnect from "../src/db/dbConnect.js"

dotenv.config({
	path: './env'
})

dbConnect()
