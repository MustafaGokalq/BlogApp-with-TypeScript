import { Request, Response } from "express";
import Role from "../models/role";
import User from "../models/user";
import Result from "../utils/result";
import APIError from "../utils/error";
import IRole from "../types/IRole";

export const role_get = async (req: Request, res: Response) => {
    try {
      const roles = await Role.findAll();
  
      new Result(roles, "işlem başarılır").success(res);
    } catch (error) {
      throw new APIError("hata alındı",400);
    }
  };

export const role_get_id = async(req:Request, res:Response)=>{
    try {
        const roles = await Role.findByPk(req.params.id);
        new Result(roles, "işlem başarılı").success(res);   
        
    } catch (error) {
        throw new APIError("işlem başarısız",404)
    }
}


export const role_create = async(req:Request, res:Response)=>{
    try {
        const newRole:IRole = req.body;

        const role = await Role.create(newRole)

        new Result(role,"işlem başarılı").created(res);
    } catch (error) {
        throw new APIError("işlem başarısız",400);
    }
}

export const role_update = async(req:Request, res:Response)=>{
    try {
        const updateRole:IRole = req.body;

        const role = await Role.findByPk(req.params.id);

        if(!role){
            throw new APIError("belirtilen api bulunamadı",404);
        }

        await role.update(updateRole);
        new Result(role, "işlem başarılı").success(res);
        
    } catch (error) {
        throw new APIError("işlem başarısız",400);
    }
}


export const role_delete = async(req:Request, res:Response)=>{
    try {
        const role =await Role.findByPk(req.params.id);

        if(!role){
            throw new APIError("istenen api bulunamadı",400)
        }

        await role.destroy()
        new Result(role,"işlem başarılı").success(res)
    } catch (error) {
        throw new APIError("işlem başarısız",400)
    }
}

