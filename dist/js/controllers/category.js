"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryDelete = exports.categoryUpdate = exports.categoryCreate = exports.categoryGet = exports.categoryGetAll = void 0;
const category_1 = __importDefault(require("../models/category"));
const result_1 = __importDefault(require("../utils/result"));
const error_1 = __importDefault(require("../utils/error"));
const categoryGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_1.default.findAll();
        new result_1.default(category, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.categoryGetAll = categoryGetAll;
const categoryGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_1.default.findByPk(req.params.id);
        new result_1.default(category, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 404);
    }
});
exports.categoryGet = categoryGet;
const categoryCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCategory = req.body;
        const category = yield category_1.default.create(newCategory);
        new result_1.default(category, "işlem başarılı").created(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.categoryCreate = categoryCreate;
const categoryUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateCategory = req.body;
        const category = yield category_1.default.findByPk(req.params.id);
        if (!category) {
            throw new error_1.default("Belirtilen api bulunamadı", 404);
        }
        yield category.update(updateCategory);
        new result_1.default(updateCategory, "işlem başarılı bir şekilde güncellendi").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.categoryUpdate = categoryUpdate;
const categoryDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_1.default.findByPk(req.params.id);
        if (!category) {
            throw new error_1.default("Belirtilen api bulunamadı", 404);
        }
        yield category.destroy();
        new result_1.default(category, "işlem başarılı bir şekilde silindi").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.categoryDelete = categoryDelete;
