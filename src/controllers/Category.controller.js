const categoryService = require('../services/Category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = await categoryService.createCategory({ name });

    return res.status(201).json(category);
}; 

const findAll = async (req, res) => {
    const category = await categoryService.findAll();

    return res.status(200).json(category);
};

module.exports = {
    createCategory,
    findAll,
};