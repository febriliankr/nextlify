const nodemailer = require("nodemailer");

export default async (req, res) => {
  console.log("req.body", req.body);
  if (req.method === "POST") {
    // Process a POST request
    const mailRecipient = req.body;
    const { email } = req.body;

    console.log("email", email);

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "milford.marquardt@ethereal.email",
        pass: "Rcer1ezEHjCZEpDV5V",
      },
    });

    const message = {
      from: '"Serverless Nodemailing" <febrilian.kr@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Serverless is ON, Baby", // Subject line
      text: "Hello, long time no see.", // plain text body
      html: "<b>Hello, long time no see.</b>", // html body
    };

    // send mail with defined transport object
    const info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.send(`Email sent!`);
  }
};
