import express,{ Router } from "express";
import blogRouter from "./blog";
import categoryRouter from "./category";
import authRouter from "./auth";
import roleRouter from "./role"

const router:Router = express.Router();

router.use("/blog",blogRouter);

router.use("/category",categoryRouter);

router.use("/auth", authRouter);

router.use("/role",roleRouter);

export default router;