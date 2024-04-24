import { Response } from "express";
import IUser from "../types/IUser"
import Iblog from "../types/IBlog";
import ICategory from "../types/ICategory";

class Result {
    data: any |Iblog|ICategory| null;
    message: string | null

    constructor(data:any |Iblog|ICategory| null = null, message: string | null = null){
    this.message = message
    this.data = data
    }

    success(res:Response){
        return res.status(200).json({
            succes:true,
            data:this.data,
            message: this.message ?? "İşlem Başarılı"
        })
    }

    created(res:Response){
        return res.status(201).json({
            success:true,
            data:this.data,
            message:this.message ?? "işlem başarılı"
        })
    }

    err500(res:Response){
        return res.status(500).json({
            success:false,
            message:this.message ?? "işlem başarısız"
        })

    }

    err429(res:Response){
        return res.status(429).json({
            success:false,
            message:this.message ?? "İşlem başarısız çok fazla istek atıldı."
        })

    }

    err404(res:Response){
        return res.status(404).json({
            success:false,
            message:this.message ?? "İşlem başarısız"
        })
    }

    err403(res:Response){
        return res.status(403).json({
            success:false,
            message:this.message ?? "işlem başarısız"
        })
    }

    err402(res:Response){
        return res.status(402).json({
            success:false,
            message:this.message ?? "işlem başarısız"
        })
    }

    err401(res:Response){
        return res.status(401).json({
            success:false,
            message:this.message ?? "işlem başarısız"
        })
    }

    err400(res:Response){
        return res.status(400).json({
            success:false,
            message:this.message ?? "işlem başarısız"
        })
    }
}

export default Result