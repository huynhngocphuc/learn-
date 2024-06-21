const express = require("express");
require('dotenv').config()
const userRouter = require("./router/user.router");

const app = express();
const port = 8080

app.use('', userRouter)

app.listen(port, () => {
  console.log("dotenv", process.env.DB);
    
  console.log(`server is running port port ${port}`);
});
