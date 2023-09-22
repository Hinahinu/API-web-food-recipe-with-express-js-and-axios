import express from 'express';
import {
    getRecipes,
    getRecipeById,
    getRecipeByIdUser,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    showRecipeByTittle,
    getNewRecipes,
    getRecipesWithPagination
    } from '../controllers/recipeController.js';

const router = express.Router();

router.get('/recipe', getRecipes);
router.get('/recipe/:id', getRecipeById);
router.get('/recipe/user/:id_user', getRecipeByIdUser);
router.post('/recipe', createRecipe);
router.patch('/recipe/:id', updateRecipe);
router.delete('/recipe/:id', deleteRecipe);
router.get('/recipe/search/:tittle', showRecipeByTittle);
router.get('/recipenewest', getNewRecipes);
router.get('/items', getRecipesWithPagination);

export default router;