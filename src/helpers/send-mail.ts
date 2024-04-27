import nodemailer from "nodemailer";
import config from "../config/config";


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: config.email.username,
      pass: config.email.password,
    },
  });

export default transporter;