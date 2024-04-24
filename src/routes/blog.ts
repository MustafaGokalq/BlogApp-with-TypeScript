import express,{ Router } from "express";
import { BlogCreate, BlogDelete, BlogGet, BlogGetAll, BlogUpdate } from "../controllers/blog";

const router:Router = express.Router();


router.get("/get", BlogGetAll)

router.get("/get/:id", BlogGet)

router.post("/create",BlogCreate)

router.put("/update/:id",BlogUpdate)

router.delete("/delete/:id",BlogDelete)


export default router;
