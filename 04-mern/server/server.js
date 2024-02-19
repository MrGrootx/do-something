const express = require("express");
const app = express();

require("dotenv").config();

const db = require("mongoose");

PORT = process.env.PORT || 6000;

const taskRoutes = require("./routes/taskRoutes");

//Middleware
app.use((req, res, next) => {
  console.log("path " + `[ ${req.path} ]` + " Method " + `[ ${req.method} ]`);
  next();
});

app.use(express.json())
// DB connection
db.connect(process.env.MONGODB)
  .then(() => {
    console.log("🟢 Database Connected");
  })
  .catch((e) => console.log(e));




app.use('/api/tasks',taskRoutes)











app.listen(PORT, () => {
  console.log(`🟢 Server Side Running, PORT: ${PORT} `);
});
