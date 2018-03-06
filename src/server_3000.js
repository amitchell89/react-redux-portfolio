var express = require('express')
var app = express()
var path    = require("path");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var helmet = require('helmet')
var xss = require('xss');

// Helmet setup
app.use(helmet())
app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create reusable transporter object using the default SMTP transport
// NodeMailer 0.7
var password = process.env.PASSWORD || null
var user = process.env.USER || null
var service = process.env.SERVICE || null

var transporter = nodemailer.createTransport("SMTP", {
  service: service,
  auth: {
    user: user,
    pass: password
  }
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +'/index.html'));
})

app.listen(3000, function () {
  console.log('Site listening on port 3000!')
})

app.post('/contact', function(req, res) {
  var payload = req.body;
  var name = xss(payload.name)
  var email = xss(payload.email)
  var message = xss(payload.message)


  var email_message = '<b>From:</b> ' + name + '<br /><br /><b>Email:</b> ' + email + '<br /><br /><b>Message:</b> ' + message;

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
