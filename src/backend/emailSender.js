const nodemailer = import('nodemailer');

let transport;
if (process.env.NODE_ENV === 'production') {
  transport = nodemailer.createTransport();
} else {
  transport = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  });
} 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'saqibmarwat44965@gmail.com',
    pass: 'Saqib123'
  }//asdfgh12
});

const sendEmail = (recipientEmail, subject, content) => {
  const mailOptions = {
    from: 'saqibmarwat44965@gmail.com',
    to: recipientEmail,
    subject: subject,
    text: content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
};


export default sendEmail;