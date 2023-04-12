
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/departmentsDB';
mongoose.connect(MONGODB_URL);
module.exports = mongoose.connection;
