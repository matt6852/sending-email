require("dotenv").config();
export default function (req, res) {
  require("dotenv").config();
  console.log(process.env.PORT);

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    tls: { rejectUnauthorized: false },
    port: process.env.PORT,
    requireTLS: true,
    host: process.env.HOST,
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
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else {
      console.log(info);
    }
  });

  res.status(200).send({ status: "success" });
}
