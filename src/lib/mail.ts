import { transporter } from "@/utils/mailer";

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  const mailOptions = {
    from: "dhakyash07@gmail.com",
    to: email,
    subject: "Verify your email",
    html: `<a href="${confirmLink}">Click here to verify your email</a>`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  const mailOptions = {
    from: "dhakyash07@gmail.com",
    to: email,
    subject: "Reset your password",
    html: `<a href="${resetLink}">Click here to create new password</a>`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
