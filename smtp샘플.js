var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "njooooo22222@gmail.com",
      pass: "password",
    },
  })
);

var mailOptions = {
  from: "njooooo22222@gmail.com",
  to: "peaceofjn@gmail.com",
  subject: "Sending Email using Node.js[nodemailer]",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
