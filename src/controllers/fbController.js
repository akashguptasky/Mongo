const fbUserModel= require("../models/fbUserModel")

const createUser= async function (req, res) {
    let userData = req.body
    let record = await fbUserModel.create(userData);
    res.send({ msg: record });
}

const getUsers= async function (req, res) {
    let myAllUser= await fbUserModel.find()
    res.send({msg:myAllUser})
}

module.exports.createUser= createUser
module.exports.getUsers= getUsers