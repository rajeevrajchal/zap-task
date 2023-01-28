import express from "express";
import readCsvFile from "../helper/readCsvFile.js";
const __dirname = "src";

const userRouter = express.Router();

const securePassword = "mysecretpassword";
let users = [];

userRouter.use((req, res, next) => {
  const csvFilePath = __dirname + "/../src/data/users.csv";
  readCsvFile(csvFilePath)
    .then((data) => {
      users = data;
      next();
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

userRouter.use((req, res, next) => {
  if (req.method === "POST" && req.body.password !== securePassword) {
    res.status(401).send("Unauthorized");
    return;
  }
  next();
});

// GET api/v1/users/<id> - get user by id
userRouter.get("/:id", (req, res) => {
  const user = users.find((user) => user?.id === req.params.id);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  res.json(user);
});

// POST api/v1/users - create a new user
userRouter.post("/", (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now().toString();
  users.push(newUser);
  res.json(newUser);
});

userRouter.get("/", async (req, res) => {
  res.json(users);
});

export default userRouter;
