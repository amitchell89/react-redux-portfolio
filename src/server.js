var express = require('express')
var app = express()
var path    = require("path");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create reusable transporter object using the default SMTP transport
// NodeMailer 0.7
let password = process.env.PASSWORD
let user = process.env.USER
let service = process.env.SERVICE

var transporter = nodemailer.createTransport("SMTP", {
    service: service,
    auth: {
        user: user,
        pass: password
    }
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
})

app.listen(3000, function () {
  console.log('Site listening on port 3000!')
})

app.post('/contact', function(req, res) {
  var payload = req.body;
  console.log('post recieved', payload)

  var email_message = 'From: ' + payload.name + '<br />Email: ' + payload.email + '<br />Message: ' + payload.message;

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: '"Aaron Mitchells Portfolio" <' + user + '>', // sender address
      to: 'aaronmitchellart@gmail.com', // list of receivers
      subject: 'New Message From Your Portfolio Site', // Subject line
      text: email_message, // plaintext body
      html: email_message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        res.redirect('/post?post=fail')
        return console.log(error);
    }
    res.redirect('/post?post=success')
  });
  transporter.close();
});



