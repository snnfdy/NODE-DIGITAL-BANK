const mongoose = require ('mongoose');
//const { mongoPass } = require('./config.json') 
const mongoPath = 'mongodb+srv://NODE-DIGITAL-BANK:wlujB6T1pFcuqWBc@nodebank.tsver.mongodb.net/NODE-DIGITAL-BANK?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParse: true,
        useUnifiedTopology: true,
    })

    return mongoose
}