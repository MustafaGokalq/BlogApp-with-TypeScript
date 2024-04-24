"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../data/db");
const Blog = db_1.sequelize.define('Blog', {
    baslik: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    altbaslik: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    aciklama: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    resim: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    anasayfa: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    onay: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    eklenmeTarihi: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, { timestamps: true });
exports.default = Blog;
