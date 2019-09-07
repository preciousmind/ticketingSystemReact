//'use strict';
const Joi = require('@hapi/joi');
const {buildJoiError} = require('./buildError');
const {decrypt} = require('./helper')

class formValidationHandler {

    /**
     * Signup form validation.
     *
     * @param   {Request} req
     * @returns {Object}
    */
    async signupValidation(req){
        console.log('data',req.body)
        const signupSchema = Joi.object().keys({
            FName: Joi.string().min(3).max(30).required().error(() => {return {message: "First Name missed"}}),
            LName: Joi.string().min(1).max(30).required().error(() => {return {message: "Last name Missed"}}),
            Email: Joi.string().email({ minDomainSegments: 2 }).required().error(() => {return {message: "Enter Valid email"}}),
            Pwd: Joi.string().required().error(() => {return {message: "Password missed"}}),
            Status: Joi.string().required().error(() => {return {message: "Status missed"}}),
            UserType: Joi.any().valid('admin','standard').required().error(() => {return {message: "Role Missed"}}),
        });
        
        console.log(req.body.Pwd,'password')

        req.body.Pwd = decrypt(req.body.Pwd ? req.body.Pwd : '');
       
        const error = Joi.validate(req.body, signupSchema,{abortEarly:false});
        if(error.error !== null)
            return await buildJoiError(error);    
        else
            return false;  
    }

    /**
     * Login form validation.
     *
     * @param   {Request} req
     * @returns {Object}
    */
    async loginValidation(req){
        
        const loginSchema = Joi.object().keys({
            Pwd: Joi.string().required().error(() => {return {message: "Password Required"}}),
            Email: Joi.string().email({ minDomainSegments: 2 }).required().error(() => {return {message: "Email Required"}})
        });

        req.body.Pwd = decrypt(req.body.Pwd ? req.body.Pwd : '');
        console.log(req.body.Pwd,'password')
    
        const error = Joi.validate(req.body, loginSchema,{abortEarly:false});
        if(error.error !== null)
            return await buildJoiError(error);    
        else
            return false;  
    }

    /**
     * Forgot password form validation.
     *
     * @param   {Request} req
     * @returns {Object}
    */
    async createTicketValidation(req){
        const schema = {
        fullName: Joi.string().required().error(() => {return {message: "Full Name required"}}),
	    email: Joi.string().email({ minDomainSegments: 2 }).required().error(() => {return {message: "Email Required"}}),
	    category: Joi.string().required().error(() => {return {message: "category required"}}),
	    priority: Joi.string().required().error(() => {return {message: "Priority required"}}),
        subject: Joi.string().required().error(() => {return {message: "Subject required"}}),
        userType: Joi.string().required().error(() => {return {message: "UserType required"}}),
	    uid: Joi.string().required().error(() => {return {message: "UID required"}}),
	    message: Joi.string().required().error(() => {return {message: "Message required"}}),
        comments: Joi.array().required().error(() => {return {message: "Comments Array required"}})
        }
       
        const error = Joi.validate(req.body, schema,{abortEarly:false});
        if(error.error !== null)
            return await buildJoiError(error);    
        else
            return false;
    }

    /**
     * Forgot password form validation.
     *
     * @param   {Request} req
     * @returns {Object}
    */
   async updateTicketValidation(req){
    const schema = {
    id: Joi.string().required().error(() => {return {message: "Ticket Id required"}}),
    uid: Joi.string().error(() => {return {message: "UID Missed"}}),
    status: Joi.string().error(() => {return {message: "Status required"}}),
    comments: Joi.array().error(() => {return {message: "Comments Array required"}})
    }
   
    const error = Joi.validate(req.body, schema,{abortEarly:false});
    if(error.error !== null)
        return await buildJoiError(error);    
    else
        return false;
}

 /**
     * Forgot password form validation.
     *
     * @param   {Request} req
     * @returns {Object}
    */
   async ticketDetailvalidation(req){
    const schema = {
        id: Joi.string().required().error(() => {return {message: "Ticket Id required"}})
    }
   
    const error = Joi.validate(req.body, schema,{abortEarly:false});
    if(error.error !== null)
        return await buildJoiError(error);    
    else
        return false;
}


    /**
     * Forgot password form validation.
     *
     * @param   {Request} req
     * @returns {Object}
    */
   async getTicketValidation(req){
    const schema = {
    uid: Joi.string().required().error(() => {return {message: "Ticket Id required"}}),
    userType: Joi.string().error(() => {return {message: "Status required"}}),
    }
   
    const error = Joi.validate(req.body, schema,{abortEarly:false});
    if(error.error !== null)
        return await buildJoiError(error);    
    else
        return false;
}

    /**
     * Email ID validation.
     *
     * @param   {String} Email
     * @returns {Object}
    */
    async isValidEmail(Email){
        const schema = {
            Email: Joi.string().email({ minDomainSegments: 2 }).required().error(() => {return {message: "61031"}})
        };

        const error = Joi.validate({Email}, schema);
        console.log('email error ', error);
        if(error.error !== null)
            return false;    
        else
            return true;
    }

}


module.exports = new formValidationHandler();