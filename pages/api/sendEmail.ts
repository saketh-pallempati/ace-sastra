import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { subject, description, email, name } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Mail options for sending to the source (your email)
  const mailOptionsToSource = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: description,
    html: `<div>
      <h1>Name: ${name}</h1>
      <h1>E-mail: ${email}</h1>
      <p>${description}</p>
      <p>Sent from: ${req.headers.referer || 'Not specified or hidden'}</p>
    </div>`,
  };

  // Mail options for sending to the customer
  const mailOptionsToCustomer = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirmation: ' + subject,
    text: 'This is an automated confirmation message. We will get back to you as soon as possible. For additional help reply to this email.',
    html: `<div>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us. This is an automated confirmation message. We will get back to you as soon as possible. For additional help reply to this email.</p>
      <p>Best regards,</p>
      <p>ACE</p>
    </div>`,
  };

  try {
    // Send both emails concurrently
    await Promise.all([transporter.sendMail(mailOptionsToSource), transporter.sendMail(mailOptionsToCustomer)]);

    console.log('Emails sent successfully');
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    } else {
      res.status(400).send({ message: 'An unknown error occurred' });
    }
  }
}
