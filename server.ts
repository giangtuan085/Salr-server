const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const uri = "mongodb+srv://dbSoren:mcdonalds2905@sorencluster-hi4q3.mongodb.net/blog";

dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

// Connect to db
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Create a schema
// const catSchema = new mongoose.Schema({
// 	name: String
// });

// const Cat = mongoose.model('Cat', catSchema);
// const catOne = Cat({name: 'Socks'}).save((err) => {
// 	if (err) throw err;
// 	console.log('saved');
// });
