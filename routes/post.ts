import { Request, Response } from "express";

export const getPost = (_req: Request, res: Response) => {
  res.send("I am NodeJS");
};
