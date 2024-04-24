import config from "../config/config";
import { Sequelize } from "sequelize";


const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,{
    dialect:"mysql",
    host:config.db.host,
    define:{
        timestamps: false
    },
    storage:"./session.mysql"
});


async function connect() {
    try {
        await sequelize.authenticate()
        console.log("mysql'e bağlanıldı")
        
    } catch (error) {
        
    }
}

export {connect , sequelize}