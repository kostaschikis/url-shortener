const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Use of 'async' because connecting to mongoDB returns a promise
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;