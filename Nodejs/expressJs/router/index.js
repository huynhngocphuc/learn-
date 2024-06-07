const express = require("express");
const app = express();
const userRouter = require("./routerModule1");
app.use('/user', userRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
