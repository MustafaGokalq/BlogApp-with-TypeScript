import { DataTypes, Model } from 'sequelize';
import IUser from '../types/IUser';
import {sequelize} from "../data/db";

const User = sequelize.define<Model<IUser>>('User', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    surname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    }
  },{timestamps:true});
  
  export default User;
  