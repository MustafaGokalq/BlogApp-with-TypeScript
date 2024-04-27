import { DataTypes, Model } from "sequelize";
import {sequelize} from "../data/db";
import IRole from "../types/IRole"


const Role = sequelize.define<Model<IRole>>("Role",{
    roleName:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

export default Role;