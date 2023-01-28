import express from "express";
import router from "./route.js";
const port = 3333;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

export default app;
