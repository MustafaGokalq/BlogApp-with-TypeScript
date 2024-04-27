"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../data/db");
const Role = db_1.sequelize.define("Role", {
    roleName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = Role;
