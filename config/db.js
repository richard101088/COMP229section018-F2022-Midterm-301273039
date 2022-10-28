// Do not expose your credentials in your code.
// let atlasDB = "momongodb+srv://DB_user:WyVEbF1SM1uO7qF6@cluster018.tqgnut7.mongodb.net/test";
let atlasDB = "mongodb+srv://DB_user:WyVEbF1SM1uO7qF6@cluster018.tqgnut7.mongodb.net/midterm?retryWrites=true&w=majority";


// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}