///////////////////
// Requirements //
/////////////////

var express = require('express')
var app = express()
var path    = require("path");
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var helmet = require('helmet')
var xss = require('xss');
require('dotenv').config();

///////////////////
// Configuration //
//////////////////

const site_name = 'Aaron Mitchell Design';  // This should come from meta_info file

//////////////////
// Helmet setup //
//////////////////

app.use(helmet())
app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create reusable transporter object using the default SMTP transport
// NodeMailer 0.7
var password = process.env.EMAIL_PASSWORD || null
var user = process.env.EMAIL_USER || null
var service = process.env.EMAIL_SERVICE || null

var transporter = nodemailer.createTransport("SMTP", {
  service: service,
  auth: {
    user: user,
    pass: password
  }
});

/////////////
// Router //
////////////

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

//include the routes file
var authRoute = require('./api/routes/authentication');
app.use(authRoute);


//////////////
// Contact //
////////////

// app.post('/contact', function(req, res) {
//   var payload = req.body;
//   var name = xss(payload.name)
//   var email = xss(payload.email)
//   var message = xss(payload.message)


//   var email_message = '<b>From:</b> ' + name + '<br /><br /><b>Email:</b> ' + email + '<br /><br /><b>Message:</b> ' + message;

//   // setup e-mail data with unicode symbols
//   var mailOptions = {
//     from: '"Aaron Mitchells Portfolio" <' + user + '>', // sender address
//     to: 'aaronmitchellart@gmail.com', // list of receivers
//     subject: 'New Message From Your Portfolio Site', // Subject line
//     text: email_message, // plaintext body
//     html: email_message // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, function(error, info){
//     console.log('send mail')
//     if(error){
//         res.redirect('/post?post=fail')
//         console.log('message failed to send')
//         return console.log(error);
//     }
//     res.redirect('/post?post=success')
//     console.log('message sent successfully')
//   });
//   transporter.close();
// });




////////////////////////////
// Contact Page Endpoint //
//////////////////////////

app.post('/contact', function(req, res) {
  var payload = req.body;
  var name = xss(payload.name);
  var email = xss(payload.email);
  var message = xss(payload.message);
  var email_message = '<b>From:</b> ' + name + '<br /><br /><b>Email:</b> ' + email + '<br /><br /><b>Message:</b> ' + message;
  var subject = `${site_name} - New Message`;
  var sendToAddress = 'aaronmitchellart@gmail.com'
  sendMail(subject, email_message, sendToAddress, res);
});

////////////////////////////////
// Use this to send an email //
//////////////////////////////

function sendMail(subject, message, sendToAddress, res) {
  // setup e-mail data with unicode symbols
  var mailOptions = {
    // from: `"${site_name}" <${user}>`, // sender address
    from: '"Aaron Mitchell Design" <' + user + '>', // sender address
    to: sendToAddress, // list of receivers
    subject: subject, // Subject line
    text: message, // plaintext body
    html: message // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        // res.end();
        res.redirect('/post?post=fail')
        console.log('message failed to send')
        return console.log(error);
    }
    // res.end();
    res.redirect('/post?post=success')
    return console.log('Email sent successfully');
  });
  transporter.close();
}

