import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'thienkhoiduong@gmail.com',
        pass: 'hrvzgxcfbxvabhud'
    },
    tls: {
        rejectUnauthorized: true,
    },

});

const sendMailContact = async (subject, email, html) => {
    await transporter.sendMail({
        from: `ComboTietKiem`,
        to: email,
        subject: subject,
        html: html
    });
};

export { sendMailContact };