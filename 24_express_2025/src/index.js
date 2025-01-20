import express from "express";
import { port } from "./config/env.js";

const app = express();

app.use(express.json());

// Routes

// Error Handling

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
