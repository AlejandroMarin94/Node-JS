const nodemailer = require("nodemailer");

const emailConfig = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "4asjmamt@gmail.com",
    pass: "ukpy wzrb cnsn lybn",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    const mailOption = {
      user: "4asjmamt@gmail.com",
      from: "",
      to: to,
      subject: subject,
      html: html,
    };
    await emailConfig.sendEmail(mailOption);
  } catch (error) {
    console.log("Ha fallado el envio", error.message);
  }
};


module.exports = {sendEmail}