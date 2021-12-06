const nodemailer = require('nodemailer');
const q = args.join(' ')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zenixganteng98@gmail.com',
        pass: 'zenixgantenghehe'
    }
});

const mailOptions = {
    from: 'zenixganteng98@gmail.com',
    to: `${q},
    subject: 'Kode Verifikasi Anda',
    text: '77781'
};

transporter.sendMail(mailOptions, (err, info) => {
   

module.exports = { nodemailer, transporter, mailOptions }