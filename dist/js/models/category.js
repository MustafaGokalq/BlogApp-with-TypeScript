"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../data/db");
const Category = db_1.sequelize.define('Category', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = Category;
