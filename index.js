const express = require ('express');
const bodyParser = require ('body-parser');
//const mongo = require('./mongo');
const mongoose = require('mongoose');
const customerSchema = require('./models/customer')

/*
const connectToMongoDB = async () => {
    await mongo().then(async(mongoose)=> {
        try{
            console.log('Connected to mongodb!')
            const user = {
                name: "Ifedayo Sanni",
                account: "0013503456",
                balance: "25000",
                phone: "08075715678",
                email: "ifedayosanni93@gmail.com",
                password: "newpass" 
            }

            await new customerSchema(customer).save()
        } finally{
            mongoose.connection.close()
        }
    })
}
*/

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/nodebank');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//initialize routes 
app.use('/api', require ('./routes/api'));

app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests')
});