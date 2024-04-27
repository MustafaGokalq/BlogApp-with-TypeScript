import express,{ Router } from "express";
import { role_create, role_delete, role_get, role_get_id, role_update } from "../controllers/role";


const router:Router = express.Router();

router.post("/post",role_create);

router.get("/get",role_get);

router.get("/get/:id", role_get_id);

router.put("/update/:id", role_update);

router.delete("/delete/:id",role_delete)




export default router;