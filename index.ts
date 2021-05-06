import express from "express";
import morgan from "morgan";
import { getPost } from "./routes/post";

const app = express();

app.get("/", getPost);

const port = 3000;
app.listen(port, () => console.log(`NodeJS is listening on port ${port}`));
