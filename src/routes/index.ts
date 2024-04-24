import express,{ Router } from "express";
import blogRouter from "./blog"
import categoryRouter from "./category"
import authRouter from "./auth"

const router:Router = express.Router();

router.use("/blog",blogRouter)

router.use("/category",categoryRouter)

router.use("/auth", authRouter)

export default router;