const express = require('express');
const router = express.Router();

router.get('/profile', (req, res)=>{
    console.log("🚀 ~ running get /profile")
    res.send('hello')
})

router.post('/avatar', (req, res)=>{
    console.log("🚀 ~ running post /profile")
})

module.exports = router