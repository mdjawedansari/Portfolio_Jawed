// pages/api/contact.js
import nodemailer from 'nodemailer';

export async function sendMail(data) {
try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ejaz.eleads@gmail.com",
      subject: "Let's work together service",
      text: `You have a new client service requirement:
        First Name: ${data.firstname}
        Last Name: ${data.lastname}
        Email: ${data.email}
        Phone: ${data.phone}
        Service: ${data.service}
        Message: ${data.message}`,
      html: `<p>You have a new contact form submission:</p>
        <p><strong>First Name:</strong> ${data.firstname}</p>
        <p><strong>Last Name:</strong> ${data.lastname}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong> ${data.message}</p>`,
    };
  
    await transporter.sendMail(mailOptions);
} catch (error) {
  console.log(error);
}
}