const mongoose = require('mongoose');
const MongoDBURL = 'mongodb://localhost:27017/insta'

mongoose.connect(MongoDBURL)
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch(()=>{
        console.log("Error in database connection");
    })