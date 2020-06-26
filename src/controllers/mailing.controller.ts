import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

//GMAIL
const user = process.env.GMAIL;
const gpassword = process.env.GPASSWORD

//MS
const email = process.env.LOGIN;
const password = process.env.PASS;

const smtpConnectionString = {
      host: 'smtp.office365.com',
      port: '587',
      auth: { user: email, pass: password },
      secureConnection: true,
      tls: { ciphers: 'SSLv3' }
    };

const mailTransport = nodemailer.createTransport(smtpConnectionString);

export const msMailing = async () => {
 try {
  await mailTransport.sendMail({
    from: email,
    to: user,
    replyTo: email,
    subject: 'ZHP Test',
    html: '<h1>No siemka</h1>',
  })
 } catch (error) {
   console.log(error)
 }
}

//GMAIL

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user,
    pass: gpassword
  }
})

const mailOptions = {
  from: user,
  to: email,
  subject: 'Mail testowy',
  text: 'To było proste?'
}

export const sendMail = () => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error)
    else console.log('Email wysłany: ' + info.response)
  })
};