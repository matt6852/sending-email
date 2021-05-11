
export default async function  (req, res) {
  require("dotenv").config();
  console.log(process.env.PORT,"check");

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    tls: { rejectUnauthorized: false },
    port: 465,
    requireTLS: true,
    host: process.env.HOST,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "sss.1993@internet.ru",
    to: "prorokwow@mail.ru",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " " + req.body.email,
    html: `<div>Клиент имя ${req.body.name}</div><p>Номер ${req.body.phone} Email:
    ${req.body.email}</p>`,
  };
 await transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else {
      console.log(info);
    }
  });

  res.status(200).send({ status: "success" });
}
