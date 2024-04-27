import { Request, Response } from "express";
import Blog from "../models/blog";
import Result from "../utils/result";
import Iblog from "../types/IBlog";
import APIError from "../utils/error";
import Category from "../models/category";

export const BlogGetAll = async (req: Request, res: Response) => {
  try {
    const { baslik, altbaslik } = req.body as Pick<
      Iblog,
      "baslik" | "altbaslik"
    >;
    const blog = await Blog.findAll({
      attributes: ["baslik", "altbaslik"],
      include: {
        model: Category,
        attributes: ["name"],
      },
    });
    new Result(blog, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const BlogGet = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findByPk(id);
    new Result(blog, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("hata aldınız", 404);
  }
};

export const BlogCreate = async (req: Request, res: Response) => {
  try {
    const newBlog: Iblog = req.body;

    const blog = await Blog.create(newBlog);
    await blog.save();
    new Result(blog, "işlem başarılı bir şekilde oluşturuldu.").created(res);
  } catch (err) {
    throw new APIError(`işlem başarısız`, 400);
  }
};

export const BlogUpdate = async (req: Request, res: Response) => {
  try {
    const updatedBlog: Iblog = req.body;

    const blog = await Blog.findByPk(req.params.id);

    if (!blog) {
      throw new APIError("belirtilen api bulunamadı", 404);
    }

    await blog.update(updatedBlog);
    new Result(updatedBlog, "işlem başarılı bir şekilde güncellendi").success(
      res
    );
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const BlogDelete = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByPk(req.params.id);

    if (!blog) {
      throw new APIError("belirtilen api bulunamadı", 404);
    }

    await blog.destroy();
    new Result(blog, "işlem başarılı bir şekilde silindi").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};
