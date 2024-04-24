import { DataTypes, Model, NUMBER } from "sequelize";
import {sequelize} from "../data/db";
import Iblog from "../types/IBlog"



const Blog = sequelize.define<Model<Iblog>>('Blog',{
    baslik:{
        type:DataTypes.STRING,
        allowNull:false
    },
    altbaslik:{
        type:DataTypes.STRING,
        allowNull:false
    },
    aciklama:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    resim:{
        type:DataTypes.STRING,
        allowNull:false
    },
    anasayfa:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    onay:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    eklenmeTarihi:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
    

},{timestamps:true})



export default Blog;

