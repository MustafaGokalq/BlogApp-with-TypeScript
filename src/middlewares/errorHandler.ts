import { NextFunction, Request, Response } from "express";
import APIError from "../utils/error";



const errorHandlerMiddleware = async(err:Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof APIError){
        return res.status(err.statusCode || 400).json({
            success:false,
            message:err.message
        })
    }
    next()

    return res.status(500).json({
        success:false,
        message:"Bir hata ile karşılaşıldı lütfen api'nizi kontrol ediniz"
    })
}

export default errorHandlerMiddleware;