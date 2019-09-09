const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},

	email: {
		type:String, 
		required: true
	}, 

	password: {
		type: String,
		required: true
	},

	createAt: {
		type:Date,
		required:true
	},

	updateAt: {
		type:Date,
		required:true
	}
})


module.exports =  mongoose.model('Users', userSchema)



