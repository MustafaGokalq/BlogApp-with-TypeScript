import express,{ Router } from "express";
import { categoryCreate, categoryDelete, categoryGet, categoryGetAll, categoryUpdate } from "../controllers/category";

const router:Router = express.Router()


router.get("/get",categoryGetAll);

router.get("/get/:id", categoryGet);

router.post("/create",categoryCreate)

router.put("/update/:id",categoryUpdate)

router.delete("/delete/:id", categoryDelete)





export default router;