import { Request, Response } from 'express';
import Post from '../models/post';

export const getPost = (_req: Request, res: Response) => {
  Post.find()
    .select('_id title body')
    .then((posts) => res.status(200).json({ results: posts }))
    .catch((err) => console.log(err));
};

export const getPostJSON = (_req: Request, res: Response) => {
  res.json({
    post: [{ title: 'One' }, { title: 'two' }],
  });
};

export const createPost = (req: Request, res: Response) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) return res.status(400).json({ error: err });
    res.status(200).json({
      post: result,
    });
  });
};
