var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zenixganteng98@gmail.com',
        pass: 'zenixgantenghehe'
    }
});

var mailOptions = {
    from: 'zenixganteng98@gmail.com',
    to: 'zganz404@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});