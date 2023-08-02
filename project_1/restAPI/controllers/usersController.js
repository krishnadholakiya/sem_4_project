const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')

const getUsers =  asyncHandler(async(req, res, next) => {
    var email = req.body.email;
    const result = await User.find({'email':email});
    res.status(200).json(result)
})

const createUser = asyncHandler(async(req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.contact);

    const result = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
    })
    res.json(result)
})


module.exports = {
    getUsers,
    createUser,
}