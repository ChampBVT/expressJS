import express, { Response, Request } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("I am NodeJS");
});

app.listen(3000);
