const nodemailer = require('nodemailer');

const emailConfig = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kodeplants@gmail.com',
    pass: 'yomy cxcr hksm hkzf',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: 'kodeplants@gmail.com',
      to: to,
      subject: subject,
      html: html,
    };
    await emailConfig.sendMail(mailOptions);
  } catch (error) {
    console.log('Ha fallado el envío.', error.message);
  }
};

module.exports = { sendEmail };
