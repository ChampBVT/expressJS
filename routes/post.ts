import { Router } from 'express';
import { createPost, getPost, getPostJSON } from '../controllers/post';
import { postValidator, validatePost } from '../validators/post';

const router = Router();

router.get('/', getPost);
router.get('/json', getPostJSON);
router.post('/', postValidator(), validatePost, createPost);

export default router;
