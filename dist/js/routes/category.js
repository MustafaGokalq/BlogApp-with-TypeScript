"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = require("../controllers/category");
const router = express_1.default.Router();
router.get("/get", category_1.categoryGetAll);
router.get("/get/:id", category_1.categoryGet);
router.post("/create", category_1.categoryCreate);
router.put("/update/:id", category_1.categoryUpdate);
router.delete("/delete/:id", category_1.categoryDelete);
exports.default = router;
