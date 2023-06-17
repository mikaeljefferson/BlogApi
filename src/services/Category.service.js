const { Category } = require('../models');

const createCategory = async ({ name }) => {
    const category = await Category.create({ name });

    return category;
};

const findAll = async () => Category.findAll();

module.exports = {
    createCategory,
    findAll,
};