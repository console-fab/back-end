// Mongo Atlas Connection
require('dotenv').config();
const mongoose = require('mongoose');

// set up connection to the appropriate MongoDB instance
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// connecting mongoose to mongoDB
mongoose.connect(mongoURI);

// printing Connection Error or Success
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// showing successful connection has been made
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

module.exports = mongoose;
