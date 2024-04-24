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
exports.BlogDelete = exports.BlogUpdate = exports.BlogCreate = exports.BlogGet = exports.BlogGetAll = void 0;
const blog_1 = __importDefault(require("../models/blog"));
const result_1 = __importDefault(require("../utils/result"));
const error_1 = __importDefault(require("../utils/error"));
const category_1 = __importDefault(require("../models/category"));
const BlogGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { baslik, altbaslik } = req.body;
        const blog = yield blog_1.default.findAll({
            attributes: ["baslik", "altbaslik"],
            include: {
                model: category_1.default,
                attributes: ["name"]
            }
        });
        new result_1.default(blog, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.BlogGetAll = BlogGetAll;
const BlogGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const blog = yield blog_1.default.findByPk(id);
        new result_1.default(blog, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("hata aldınız", 404);
    }
});
exports.BlogGet = BlogGet;
const BlogCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBlog = req.body;
        const blog = yield blog_1.default.create(newBlog);
        yield blog.save();
        new result_1.default(blog, "işlem başarılı bir şekilde oluşturuldu.").created(res);
    }
    catch (err) {
        throw new error_1.default(`işlem başarısız`, 400);
    }
});
exports.BlogCreate = BlogCreate;
const BlogUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlog = req.body;
        const blog = yield blog_1.default.findByPk(req.params.id);
        if (!blog) {
            throw new error_1.default("belirtilen api bulunamadı", 404);
        }
        yield blog.update(updatedBlog);
        new result_1.default(updatedBlog, "işlem başarılı bir şekilde güncellendi").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.BlogUpdate = BlogUpdate;
const BlogDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_1.default.findByPk(req.params.id);
        if (!blog) {
            throw new error_1.default("belirtilen api bulunamadı", 404);
        }
        yield blog.destroy();
        new result_1.default(blog, "işlem başarılı bir şekilde silindi").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.BlogDelete = BlogDelete;
