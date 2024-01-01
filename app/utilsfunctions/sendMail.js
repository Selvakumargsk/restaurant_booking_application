const nodemailer = require('nodemailer');

const sendOTPEmail = async (email, otp) => {
  console.log(email , otp);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'gskumarnellai@gmail.com',
      pass: 'yyiwuipmkjjqmnem',
    },
  });

  const mailOptions = {
    from: 'gskumarnellai@gmail.com',
    to: email,
    subject: 'One time authentication',
    text: `Hello ${email} your One time authentication password is ${otp}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error sending email. Please try again.' };
  }
};

module.exports = { sendOTPEmail };
