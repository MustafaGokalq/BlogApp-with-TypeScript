"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../data/db");
const User = db_1.sequelize.define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, { timestamps: true });
exports.default = User;
