const express = require("express");
const port = 8000;
const app = express();
app.listen(port, () => {
  console.log(`🚀 ~ app running in ${port}:`);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/post", (req, res) => {
  res.send("hello post");
});

app.put("/put", (req, res) => {
  res.send("hello put");
});

app.delete("/delete", (req, res) => {
  res.send("hello delete");
});

// -------------------------// -------------------------// -------------------------
// method use in express
// -> one function middlerware
app.use((req, res, next) => {
  console.log("Middleware được áp dụng cho tất cả các yêu cầu");
  next(); // Chuyển quyền kiểm soát đến middleware tiếp theo
});

// -> one string or mutiple middleware
app.use("/get", (req, res, next) => {
  console.log("Middleware cho các yêu cầu bắt đầu với /get");
  next();
});
app.get("/get", (req, res) => {
  console.log("running /get");
  res.send("hello");
});
/* 
result: -->
Middleware được áp dụng cho tất cả các yêu cầu
Middleware cho các yêu cầu bắt đầu với /get
running /get
*/
// -> one oject router
const userRouter = express.Router();

userRouter.get('/profile', (req, res) => {
  res.send('User Profile');
});

app.use('/user', userRouter);
/*
 http://localhost:8000/user/profile
 result
 --> User Profile
 */
// -------------------------// -------------------------// -------------------------
// handle request and response
// 1 connect param in request

app.get('/user/:id', (req, res) => {
  const userId = req.params.id
  console.log("🚀 ~ app.get ~ userId:", userId)
})

// 2 connect search Query Parameters in request

app.get('/search', (req, res) => {
  const query = req.query
  res.send(query)
  console.log("🚀 ~ app.get ~ query:", query)
})

// 3 connect data from body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/get-list-user', (req, res) => {
  const data = req.body
  console.log("🚀 ~ app.get ~ data:", data)
  res.send(data)
})

// 4 response res.json()
app.get('/get-list-user-json', (req, res) => {
  const data = req.body
  console.log("🚀 ~ get-list-user-json", data)
  res.json(data)
})

// 5 response res.status()
app.get('/get-list-user-status', (req, res) => {
  const data = req.body
  res.status(404).send('page not find')
  console.log("🚀 ~ get-list-user-status", data)
  res.json(data)
})
// ----------------------------------------------------------------
// test the get-list-user-status
