import Recipe from '../models/recipeModel.js';
import { Op } from 'sequelize';

export const getRecipes = async (req, res) => {
    try {
        const response = await Recipe.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getRecipeById = async (req, res) => {
    try {
        const response = await Recipe.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getRecipeByIdUser = async (req, res) => {
    try {
        const response = await Recipe.findAll({
            where: {
                id_user: req.params.id_user
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createRecipe = async (req, res) => {
    try {
        await Recipe.create(req.body);
        res.status(201).json({ msg: 'Recipe Created' });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateRecipe = async (req, res) => {
    try {
        await Recipe.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: 'Recipe Update' });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        await Recipe.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: 'Recipe Deleted' });
    } catch (error) {
        console.log(error.message);
    }
};

export const showRecipeByTittle = async (req, res) => {
    try {
        const response = await Recipe.findAll({
            where: {
                tittle: {
                    [Op.iLike]: `%${req.params.tittle}%`
                }
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getNewRecipes = async (req, res) => {
    try {
        const response = await Recipe.findAll({
            order: [['createdAt', 'DESC']],
            limit: 5,
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getRecipesWithPagination = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    try {
        const response = await Recipe.findAndCountAll({
            offset,
            limit,
        });

        const totalPages = Math.ceil(response.count / limit);

        res.json({
            totalItems: response.count,
            totalPages,
            currentPage: page,
            items: response.rows,
        });
    } catch (error) {
        console.log(error.message);
    }
};