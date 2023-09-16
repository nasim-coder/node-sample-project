const db = require('../models/index');
const { user } = db;

exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body;
        const userCreated = await user.create({ first_name, last_name, email });
        return res.status(201).send({ success: true, data: userCreated });
    } catch (err) {
        return res.status(500).send({ success: false, error: err.message })
    }
}

exports.userDetails = async (req, res) => {
    try {
        const { user_id } = req.query;
        const userdetails = await user.findOne({
            where: {
                id: user_id,
            }
        });
        return res.status(200).send({ success: true, data: userdetails });
    } catch (err) {
        return res.status(500).send({ success: false, error: err.message })
    }
}

exports.userList = async (req, res) => {
    try {
        const userList = await user.findAll();
        return res.status(200).send({ success: true, data: userList });
    } catch (err) {
        return res.status(500).send({ success: false, error: err.message })
    }
}