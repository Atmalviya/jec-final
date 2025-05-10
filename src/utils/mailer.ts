import nodemailer from 'nodemailer';


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "dhakyash07@gmail.com",
      pass: "onodcgjuposvgdlp",
    },
  });