require('dotenv').config()
const { default: mongoose, connection } = require("mongoose");

const coneetction = mongoose.connect(process.env.MONGO_URL)
// console.log(connection);