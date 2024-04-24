import express,{ Express } from "express";
import cors from "cors"
import { connect } from "./data/db";
import indexRoute from "./routes/index"
import errorHandlerMiddleware from "./middlewares/errorHandler";
import {sequelize} from "./data/db";
import cookieParser  from 'cookie-parser';
import session from 'express-session';
import SequelizeStore from "connect-session-sequelize";

import dotenv from "dotenv"
dotenv.config()

//classlar
import populate from "./data/dummy-data";
import Category from "./models/category";
import Blog from "./models/blog";
import User from "./models/user";


const app:Express=express()
const SequelizeSessionStore = SequelizeStore(session.Store);

//middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge:1000 * 60 * 60 * 24
  },
  store: new SequelizeSessionStore({
    db:sequelize
  })
}))

//routes
app.use("/api",indexRoute)

//error
app.use(errorHandlerMiddleware);

User.belongsTo(Blog);
Blog.hasMany(User);

Blog.belongsToMany(Category, {through:"blogCategories"});
Category.belongsToMany(Blog,{through:"blogCategories"});


//ilişkiler
(async()=>{
    await sequelize.sync({force:true})
    await populate()
})()



app.listen(4000, ():void=>{
    connect()
    console.log("port 3000' de çalışıyor")
})