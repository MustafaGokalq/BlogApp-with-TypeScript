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
exports.get_id_user = exports.get_users = exports.login = exports.register = void 0;
const user_1 = __importDefault(require("../models/user"));
const error_1 = __importDefault(require("../utils/error"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const result_1 = __importDefault(require("../utils/result"));
const auth_1 = require("../middlewares/auth");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { checkmail } = req.body.email;
    const mail = yield user_1.default.findOne(checkmail);
    if (mail) {
        throw new error_1.default("işlem başarısız", 400);
    }
    req.body.password = yield bcrypt_1.default.hash(req.body.password, 10);
    const newUser = req.body;
    yield user_1.default.create(newUser);
    (0, auth_1.createToken)(newUser, res);
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            throw new error_1.default("email veya parola hatalı", 401);
        }
        const comparePassword = yield bcrypt_1.default.compare(password, user.password);
        if (!comparePassword) {
            throw new error_1.default("email veya parola hatalı", 401);
        }
        new result_1.default(user, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("hata aldınız", 400);
    }
});
exports.login = login;
// export const me = async (req: any, res: Response) => {
//   return new Result(req.user).success(res);
// };
const get_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findAll();
        new result_1.default(user, "işlem başarılı").success(res);
    }
    catch (error) {
        throw new error_1.default("işlem başarısız", 400);
    }
});
exports.get_users = get_users;
const get_id_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByPk(req.params.id);
        //const cookie = res.cookie("isAuth", 1); cookie kısmı
        const session = req.session.isAuth = 1;
        new result_1.default(user, `${session}`).success(res);
    }
    catch (error) {
        throw new error_1.default("kullanıcı bulunamadı", 404);
    }
});
exports.get_id_user = get_id_user;
