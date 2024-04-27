import { Request, Response } from "express";
import Category from "../models/category";
import Result from "../utils/result";
import APIError from "../utils/error";
import ICategory from "../types/ICategory";

export const categoryGetAll = async (req: Request, res: Response) => {
  try {
    const category = await Category.findAll();
    new Result(category, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const categoryGet = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByPk(req.params.id);
    new Result(category, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 404);
  }
};

export const categoryCreate = async (req: Request, res: Response) => {
  try {
    const newCategory: ICategory = req.body;

    const category = await Category.create(newCategory);

    new Result(category, "işlem başarılı").created(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const categoryUpdate = async (req: Request, res: Response) => {
  try {
    const updateCategory: ICategory = req.body;

    const category = await Category.findByPk(req.params.id);

    if (!category) {
      throw new APIError("Belirtilen api bulunamadı", 404);
    }

    await category.update(updateCategory);
    new Result(
      updateCategory,
      "işlem başarılı bir şekilde güncellendi"
    ).success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const categoryDelete = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      throw new APIError("Belirtilen api bulunamadı", 404);
    }

    await category.destroy();
    new Result(category, "işlem başarılı bir şekilde silindi").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};
