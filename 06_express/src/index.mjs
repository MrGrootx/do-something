import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

const resolveIndexUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedid = parseInt(id);
  if (isNaN(parsedid)) return res.sendStatus(400);

  const findUserIndex = mockUser.findIndex((user) => user.id === parsedid);
  if (findUserIndex == -1) return res.sendStatus(404);
  req.findUserIndex = findUserIndex;
  next();
};

app.get("/", (req, res) => {
  res.status(200).send({
    mgs: "Hello World!",
  });
});

const mockUser = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
  },
];
app.use(loggingMiddleware);
app.get("/api/users", (req, res) => {
  res.status(200).send(mockUser);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { body } = req;
  const newUser = {
    id: mockUser[mockUser.length - 1].id + 1,
    ...body,
  };
  mockUser.push(newUser);
  return res.status(201).send(newUser);
});

app.get("/api/users/:id", (req, res) => {
  const parsedid = +req.params.id;
  if (isNaN(parsedid))
    return res.status(400).send({
      err: "Invalid ID",
    });

  const findUser = mockUser.find((user) => user.id === parsedid);
  if (!findUser) return res.status(404).send({ err: "User not found" });
  console.log(findUser);
  return res.status(200).send(findUser);
});

app.get("/api/products", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 8.99,
    },
  ]);
});

app.put("/api/users/:id", resolveIndexUserId, (req, res) => {
  const { body, findUserIndex } = req;

  mockUser[findUserIndex] = { id: mockUser[findUserIndex].id, ...body };
  return res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
