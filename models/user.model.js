const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[true,'Provide First Name']
    },
    lastName:{
        type: String,
        required:[true,'Provide Last Name']
    },
    email:{
        type: String,
        required:[true,'Email Address Is Required']
    },
    password:{
        type: String,
        required:[true,'Password Is Required']
    }
})
UserSchema.methods.generateAuthToken = function(){
const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY)

    return token
}

const User = mongoose.model('User', UserSchema)

const validate = (data)=>{
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),

    });
    return schema.validate(data)
}
module.exports = { User,validate }