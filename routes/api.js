const express = require ('express');
const router = express.Router();
const Customer = require('../models/customer');
const mongoose = require('mongoose');

// get a list of customers from the db
router.get('/customers', function(req,res,next){
    Customer.find({}).then(function(customers){
        res.send(customers);
    });    
});

// add a new customer to the db
router.post('/customers', (req,res,next)=>{
    /*Customer.create(req.body).then(function(customer){
    res.send(customer);*/
    const customer = new Customer({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        number: req.body.number,
        balance: req.body.balance,
        phone: req.body.phone,
        email: req.body.email,
    });
    customer.save().then(result=>{
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: "Handling POST requests to /customers",
        createdCustomer: customer
    });
}); 


// get the details of a particular customer from the db
router.get('/customers/:id', (req,res,next)=>{
    Customer.findById({_id: req.params.id}).then(function(customer){
         res.send(customer);
});

// update the details of a particular customer in the db
router.put('/customers/:id', function(req,res,next){
    Customer.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Customer.findOne({_id: req.params.id}).then(function(customer){
            res.send(customer);
        });
    }).catch(next);      
});

// delete a particular user from the db
router.delete('/customers/:id', function(req,res,next){
    Customer.findByIdAndRemove({_id: req.params.id}).then(function(customer){
        //console.log(req.params.id)
        //res.send({type: 'DELETE'})
        res.send(customer);
   }).catch(next)
});
})
module.exports = router;