import { NextApiRequest, NextApiResponse } from 'next';

const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  console.log(process.env.SENDGRID_API_KEY);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const content = {
    to: email,
    from: 'ace.soc.sastra@gmail.com',
    subject: subject,
    text: description,
    html: `<div>
    <h1>Name: ${name}</h1>
    <h1>E-mail: ${email}</h1>
    <p>${description}</p>
    <p>Sent from: ${referer || 'Not specified or hidden'}`,
  };

  try {
    await sgMail.send(content);
    console.log('Email sent successfully');
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
