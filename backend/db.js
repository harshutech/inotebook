const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directconnection=true";

const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    },6000)
}

module.exports = connectToMongo;