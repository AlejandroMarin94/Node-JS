const nodemailer = require("nodemailer");

const service = process.env.EMAIL_SERVICE
const user = process.env.EMAIL_USER
const pass = process.env.EMAIL_PASS

const config = nodemailer.createTransport({
    service: `${service}`,
    auth: {
        user: `${user}`,
        pass: `${pass}`
    }, tls: {
        rejectUnauthorized: false,
    }
});

const sendEmail = async (to, subject, html) => {
    try {
    const mailOptions = {
      from: `${user}`,
      to: to,
      subject: subject,
      html: html,
    };
 
    await config.sendMail(mailOptions);
  } catch (error) {
    console.log("No se ha podido enviar el email", error.message);
  }
};

module.exports = { sendEmail }