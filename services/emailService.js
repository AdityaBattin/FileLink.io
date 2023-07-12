// node mailer
const nodemailer = require('nodemailer')
async function sendMail ({ from, to, subject, text, html }) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    let info = await transporter.sendMail({
        from: `FileLink.io <${from}>`,
        to,
        subject,
        text,
        html
    })
}
module.exports = sendMail;