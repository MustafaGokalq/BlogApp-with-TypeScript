"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const router = express_1.default.Router();
router.post("/register", auth_1.register);
router.get("/get-register", auth_1.get_users);
router.get("/get-id-register/:id", auth_1.get_id_user);
router.post("/login", auth_1.login);
// router.get("/me",checkToken ,me)
exports.default = router;
