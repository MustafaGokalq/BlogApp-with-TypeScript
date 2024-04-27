
const config = {
    db:{
        host:"localhost",
        username:"root",
        password:"2758",
        database:"blogdb"
    },
    email:{
        username:process.env.EMAIL,
        password:process.env.PASSWORD
    }
}

export default config;