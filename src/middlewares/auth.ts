import {NextFunction, Request, Response } from "express";
import IUser from "../types/IUser";
import jwt from "jsonwebtoken"
import APIError from "../utils/error";
import User from "../models/user";



export const createToken = (user:IUser, res:Response)=>{
    const payload:object=({
        sub:user._id,
        name:user.name
    })  

    const token =  jwt.sign(payload, process.env.SECRET_KEY || "",{
        expiresIn: "1h",
        algorithm:"HS512"
    })

    return res.status(200).json({
        success:true,
        token,
        message:"token oluşturuldu"
    })
}


// export const checkToken = (req:any, res:Response, next:NextFunction)=>{
//     const headerToken = req.headers.authorization && req.headers.authorization.startsWith("Bearer ")

//     if(!headerToken){
//         throw new APIError("lütfen oturum açınız",400)
//     }

//     const token:string = req.headers.authorization.split(" ")[1];

//     jwt.verify(token, process.env.SECRET_KEY || "", async(err:any, decoded:any)=>{
//         if(err){
//             throw new APIError("işlem başarısız",401)
//         }

//         const userInfo = await User.findByPk(decoded?.sub)

        
//         if(!userInfo){
//             const error = new APIError("İşlem başarısız", 400);
//             return next(error)
        
//         }
//         req.user = userInfo
//         next()


//     })
// }




