export default (req, res) => {
    console.log("req.body", req.body);
    if (req.method === "POST") {
    // Process a POST request
    const mailRecipient = JSON.parse(req.body).recipient;
    console.log("mailRecipient", mailRecipient);
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "milford.marquardt@ethereal.email",
        pass: "Rcer1ezEHjCZEpDV5V",
      },
    });

    const message = {
      from: '"Serverless Nodemailing v2" <febrilian.kr@gmail.com>', // sender address
      to: `${mailRecipient}`, // list of receivers
      subject: "Serverless is ON, Baby", // Subject line
      text: "Hello, long time no see.", // plain text body
      html: "<b>Hello, long time no see.</b>", // html body
    };

    transporter.sendMail(message, function (error, info) {
      if (error) {
        callback(null, {
          statusCode: 500,
          body: "failed",
        });
      } else {
        callback(null, {
          statusCode: 200,
          body: "success",
        });
      }
    });
  } else {
    // Handle any other HTTP method
  }
};
