const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
// Create a user using: POST "/api/auth/" apko is par post request marni hai or data bhejna hai
router.post('/',[
    body('name', 'Please Enter Valid Name').isLength({ min: 5 }),
    body('email', "Enter Valid Email").isEmail(),
    body('password', "Please Enter a Valid Password").isLength({ min: 8 }),
], (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }
    res.send(req.body)
})

module.exports = router;