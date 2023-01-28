import express from "express";
import userRouter from "./api/user.js";

const router = express.Router();
const __dirname = "src";

router.get("/", (req, res) => {
  res.send("Hello from Zaptic! 👋💜");
});

// fetch image
router.get("/zaptic", (req, res) => {
  const imagePath = "public/res/zaptic_logo.jpeg";
  res.sendFile(imagePath, { root: __dirname });
});

// user routes
router.use("/api/v1/users/", userRouter);

// middleware to handle 404 error
router.use((req, res, next) => {
  const error = new Error("Seems like you're lost😱. Do you need some help?🕵️");
  error.status = 404;
  next(error);
});

router.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default router;
