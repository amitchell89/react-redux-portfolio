///////////////////
// Requirements //
/////////////////

var express = require('express');
var app = express();
var router = express.Router();
require('dotenv').config();

//////////////////////////
// API - Authorization //
////////////////////////


//////////////////////
// Signup Endpoint //
////////////////////

router.post('/signup', function(req, res) {
  var payload = req.body;

  var userPassword = payload.password;
  var secretPassword = process.env.AUTHENTICATION_PASSWORD || null;
  var secretCookieToken = process.env.SECRET_COOKIE_TOKEN || null;

  console.log('user password',userPassword)
  if (secretPassword === userPassword) {
    console.log('login success')
    return res.json({
      token: secretCookieToken
    })
  } else {
    console.log('login fail')
    return res.status(401).json({error: "Login Failure: Your password did not match"});
  }

});

router.post('/verifyAuthToken', function(req, res) {
  var payload = req.body;
  console.log('VERIFY TOKEN', payload)

  var userToken = payload.token;
  var secretCookieToken = process.env.SECRET_COOKIE_TOKEN || null;

  console.log(userToken, secretCookieToken)
  if (userToken === secretCookieToken) {
    console.log('verify token success')
    return res.status(200).send("Token Verification Successful");
    

  } else {
    console.log('verify token fail')
    return res.status(401).send("Token Verification Failure: Token did not match");
  }

});



module.exports = router;