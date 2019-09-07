'use strict';

const Tickets = require('./model');
const formValidationHandler = require('./../utils/validationHandler')

//===================
// Create Tickets Route
//===================
const createTicket = async (req, res, next) => {

  // Finds the validation errors in this request and wraps them in an error object
  const errors = await formValidationHandler.createTicketValidation(req);
  //console.log(`errors=> ${JSON.stringify(errors)}`)

  // return;
   if (errors !== false) {
     res.status(422).json({ errors: errors});//Sending validation error response
     return;
  }

  const {fullName, email, category, priority, subject, message, comments, uid} = req.body 


  let ticket = new Tickets({fullName, email, category, priority, subject, message, comments, uid, status:"1"});

  ticket.save(function(err, user) {
    if(err) {return next(err);}
    
    console.log(user)

   
    res.status(201).json({ message: "Thanks! Your request was submitted successfuly!" });
    next();
  })
}

const updateTicket = async (req, res, next) => {
console.log('update')
  const {id, status, comments} = req.body;
  try
  {        
  // Finds the validation errors in this request and wraps them in an error object
  const errors = await formValidationHandler.updateTicketValidation(req);
  //console.log(`errors=> ${JSON.stringify(errors)}`)

  // return;
   if (errors !== false) {
     res.status(422).json({ errors: errors});//Sending validation error response
     return;
  }

      var UserResponse = await checkTicket(req, res);
      
        if(UserResponse)
        {
          const userUpdateObject = {
            status,
            comments
          }

          console.log('success')
          const response = await Tickets.update({_id: id},{'$set': userUpdateObject});

          Tickets.findById(id, (err, ticket) => {
            if(err) res.send(err);
            res.status(200).json(ticket)
          })
        
          
          
        }
}
catch(err)
      {
        console.log(`err : ${err}`)
        res.status(500).json({err: err})
      }
    }
const checkTicket = async(req,res) => {
  var UserResponse = await Tickets.find({_id: req.body.id});

      if(UserResponse.length == 0)//Invalid User
      {
          res.status(422).json({ errors: {code:7106, messge: '7106'}});//Sending validation error response
          return;
      }

      return UserResponse
}

const getTickets = async(req,res) => {
  const {uid, userType} = req.body;
  try
  {        
  // Finds the validation errors in this request and wraps them in an error object
  const errors = await formValidationHandler.getTicketValidation(req);
  //console.log(`errors=> ${JSON.stringify(errors)}`)

  // return;
   if (errors !== false) {
     res.status(422).json({ errors: errors});//Sending validation error response
     return;
  }
  let tickets;
  if(userType === 'admin'){
    tickets = await Tickets.find();
  }else{
    tickets = await Tickets.find({uid});
  }
  
  if(tickets){
    res.status(200).json(tickets); 
  }

}catch(err)
{
  console.log(`err : ${err}`)
  res.status(500).json({err: err})
}

}

const ticketDetail = async(req, res) => {
  const {id} = req.body;
  try
  {        
  // Finds the validation errors in this request and wraps them in an error object
  const errors = await formValidationHandler.ticketDetailvalidation(req);
  //console.log(`errors=> ${JSON.stringify(errors)}`)

  // return;
   if (errors !== false) {
     res.status(422).json({ errors: errors});//Sending validation error response
     return;
  }
  Tickets.findById(id, (err, ticket) => {
    if(err) res.send(err);
    res.status(200).json(ticket)
  })

}catch(err)
{
  console.log(`err : ${err}`)
  res.status(500).json({err: err})
}
}



module.exports = {
    createTicket,
    updateTicket,
    getTickets,
    ticketDetail
}