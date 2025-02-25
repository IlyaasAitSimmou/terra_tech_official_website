import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
} as SMTPTransport.Options);

type sendEmailDto = {
    sender: Mail.Address,
    recipients: Mail.Address[],
    subject: string;
    message: string;
}

export const sendEmail = async ({sender, recipients, subject, message}: sendEmailDto) => {
    await transport.sendMail({
        from: sender,
        to: recipients,
        subject,
        html: message,
        text: message
    });
}