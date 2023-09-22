import express from 'express';
import { 
    createComment,
    deleteComment,
    getCommentByIdRecipe,
    updateComment,
    } from '../controllers/commentController.js';

const router = express.Router();

router.get('/comment/:id_recipe', getCommentByIdRecipe);
router.post('/comment', createComment);
router.patch('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

export default router;