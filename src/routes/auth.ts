import express,{ Router } from "express";
import { register, get_users, get_id_user, login} from "../controllers/auth";
//import { checkToken } from "../middlewares/auth";



const router:Router = express.Router();

router.post("/register", register)

router.get("/get-register", get_users)

router.get("/get-id-register/:id", get_id_user)

router.post("/login", login)

// router.get("/me",checkToken ,me)


export default router;