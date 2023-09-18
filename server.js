require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const userRoute = require('./route/user');
const db = require('./models/index');

app.get('/', (req, res)=>res.status(200).send({success: true, message: 'welcome to ec2'}))
app.use('/node', userRoute);
app.listen(PORT, () => console.log(`server is listening on port : ${PORT}`));