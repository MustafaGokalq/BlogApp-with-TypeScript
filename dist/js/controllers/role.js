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
exports.role_delete = exports.role_update = exports.role_create = exports.role_get_id = exports.role_get = void 0;
const role_1 = __importDefault(require("../models/role"));
const result_1 = __importDefault(require("../utils/result"));
const error_1 = __importDefault(require("../utils/error"));
const role_get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield role_1.default.findAll();
        new result_1.default(roles, "işlem başarılır").success(res);
    }
    catch (error) {
        throw new error_1.default("hata alındı", 400);
    }
});
exports.role_get = role_get;
const role_get_id = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield role_1.default.findByPk(req.params.id);
        new result_1.default(roles, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 404);
    }
});
exports.role_get_id = role_get_id;
const role_create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRole = req.body;
        const role = yield role_1.default.create(newRole);
        new result_1.default(role, "işlem başarılı").created(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.role_create = role_create;
const role_update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateRole = req.body;
        const role = yield role_1.default.findByPk(req.params.id);
        if (!role) {
            throw new error_1.default("belirtilen api bulunamadı", 404);
        }
        yield role.update(updateRole);
        new result_1.default(role, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.role_update = role_update;
const role_delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield role_1.default.findByPk(req.params.id);
        if (!role) {
            throw new error_1.default("istenen api bulunamadı", 400);
        }
        yield role.destroy();
        new result_1.default(role, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.role_delete = role_delete;
