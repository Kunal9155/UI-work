var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "9155kunalarora",
    pass: "passowrd@a",
  },
});

var mailOptions = {
  from: "9155kunalarora@gmail.com",
  to: "no-reply@gmail.com",
  subject: "PT-2 NODEJS MODULE",
  text: "HELLO HOW ARE YOU ? kunal this side done by node ",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});