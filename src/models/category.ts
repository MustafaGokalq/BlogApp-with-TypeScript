import { DataTypes, Model } from "sequelize";
import {sequelize} from "../data/db"
import ICategory from "../types/ICategory"





const Category = sequelize.define<Model<ICategory>>('Category',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }

})




export default Category;