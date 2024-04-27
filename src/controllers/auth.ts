import { Request, Response } from "express";
import User from "../models/user";
import APIError from "../utils/error";
import bcrypt from "bcrypt";
import Result from "../utils/result";
import IUser from "../types/IUser";
import { createToken } from "../middlewares/auth";
import emailService from "../helpers/send-mail";

export const register = async (req: Request, res: Response): Promise<any> => {
  const { checkmail } = req.body.email;

  const mail = await User.findOne(checkmail);

  if (mail) {
    throw new APIError("Bu mail zaten kullanımda.", 400);
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  const newUser: IUser = req.body;
  await User.create(newUser);

  createToken(newUser, res);

  await emailService.sendMail({
    from: process.env.FROM,
    to: newUser.email,
    subject: "Hesabınız oluşturuldu",
    text: "Hesabınız başarılı bir şekilde oluşturuldu.",
  });
};

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body as Pick<IUser, "email" | "password">;

    const user = await User.findOne({ email } as object);

    if (!user) {
      throw new APIError("email veya parola hatalı", 401);
    }

    const comparePassword: boolean = await bcrypt.compare(
      password,
      //@ts-ignore
      user.password
    );

    if (!comparePassword) {
      throw new APIError("email veya parola hatalı", 401);
    }

    new Result(user, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("hata aldınız", 400);
  }
};

// export const me = async (req: any, res: Response) => {
//   return new Result(req.user).success(res);
// };

export const update_user = async (req: Request, res: Response) => {
  try {
    const updatedUser: IUser = req.body;

    const user = await User.findByPk(req.params.id);

    if (!user) {
      throw new APIError("aradığınız api bulunamadı", 404);
    }

    await user.update(updatedUser);
    new Result(user, "işlem başarılı.");
  } catch (error) {}
};

export const delete_user = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      throw new APIError("aradığınız api bulunamadı", 404);
    }

    await user.destroy();
    new Result(user, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const get_users = async (req: Request, res: Response) => {
  try {
    const user = await User.findAll();
    new Result(user, "işlem başarılı").success(res);
  } catch (error) {
    throw new APIError("işlem başarısız", 400);
  }
};

export const get_id_user = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    //const cookie = res.cookie("isAuth", 1); cookie kısmı
    //@ts-ignore
    const session = (req.session.isAuth = 1);
    //const session = (req.session.isAuth = 1);
    new Result(user, `${session}`).success(res);
  } catch (error) {
    throw new APIError("kullanıcı bulunamadı", 404);
  }
};
