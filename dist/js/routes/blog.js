"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = require("../controllers/blog");
const router = express_1.default.Router();
router.get("/get", blog_1.BlogGetAll);
router.get("/get/:id", blog_1.BlogGet);
router.post("/create", blog_1.BlogCreate);
router.put("/update/:id", blog_1.BlogUpdate);
router.delete("/delete/:id", blog_1.BlogDelete);
exports.default = router;
