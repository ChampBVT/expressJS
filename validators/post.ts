import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const postValidator = () => {
  return [
    body('title', 'Write a title').notEmpty(),
    body('title', 'Length must be between 4 - 150').isLength({
      min: 4,
      max: 150,
    }),

    body('body', 'Write a title').notEmpty(),
    body('body', 'Length must be between 40 - 1500').isLength({
      min: 40,
      max: 1500,
    }),
  ];
};

export const validatePost = (req: Request, res: Response, next: () => void) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: any[] = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};
