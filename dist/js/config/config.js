"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    db: {
        host: "localhost",
        username: "root",
        password: "2758",
        database: "blogdb"
    },
    email: {
        username: process.env.EMAIL,
        password: process.env.PASSWORD
    }
};
exports.default = config;
