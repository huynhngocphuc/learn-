const express = require('express');
const routerUser = express.Router();

routerUser.get('/user', (req, res)=>{
    res.send('hello')
})

module.exports = routerUser