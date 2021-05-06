


import nodemailer from "nodemailer";

// 25800852asdf
export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
      tls: {rejectUnauthorized: false},
    port: 465,
    host: "smtp.mail.ru",
    auth: {
      user: "sss.1993@internet.ru",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "sss.1993@internet.ru",
    to: "prorokwow@mail.ru",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " " + req.body.email,
    html: `<div>Клиет имя ${req.body.name}</div><p>Номер ${req.body.phone} Email:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else{
        console.log(info);
    } 
  });
  
  res.status(200).send({"status":"success"})
}