class ApiResponse{
	constructor(statusCode,data,message = "Success"){
		this.statusCode = statusCode
		this.data = data
		this.message = message
		this.success = statusCode < 400
	}
}


// usage : new ApiResponse(400,data,message:"User sent successfully")
