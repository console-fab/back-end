// Mongo Atlas Connection
require('dotenv').config();
const mongoose = require('mongoose');
// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;
// Connect to Mongo
mongoose.connect(mongoURI);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));
// Open Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});
// Export
module.exports = mongoose;
//comment
