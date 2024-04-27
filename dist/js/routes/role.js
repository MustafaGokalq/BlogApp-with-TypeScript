"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_1 = require("../controllers/role");
const router = express_1.default.Router();
router.post("/post", role_1.role_create);
router.get("/get", role_1.role_get);
router.get("/get/:id", role_1.role_get_id);
router.put("/update/:id", role_1.role_update);
router.delete("/delete/:id", role_1.role_delete);
exports.default = router;
