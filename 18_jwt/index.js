import express from "express";
import authRoute from './routes/auth.Routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.use('/auth', authRoute)

app.listen(port, () => {
   console.log(`App listening on port ${port}!`);
});