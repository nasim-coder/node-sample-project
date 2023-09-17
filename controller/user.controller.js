
const { default: mongoose } = require('mongoose');
const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { name, email, address } = req.body;
        const userCreated = await User.create( { name, email, address });
        return res.status(201).send({ success: true, data: userCreated });
    } catch (err) {
        return res.status(500).send({ success: false, error: err.message })
    }
}

exports.userDetails = async (req, res) => {
    try {
        const { user_id } = req.query;
        
        const userdetails = await User.findById({
            _id: user_id
        });
        return res.status(200).send({ success: true, data: userdetails });
    } catch (err) {
        return res.status(500).send({ success: false, error: err.message })
    }
}

exports.userList = async (req, res) => {
    try {
        const userList = await User.find();
        return res.status(200).send({ success: true, data: userList });
    } catch (err) {
        return res.status(500).send({ success: false, error: err.message })
    }
}