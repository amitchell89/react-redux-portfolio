///////////////////
// Requirements //
/////////////////

var express = require('express');
var app = express();
var router = express.Router();
require('dotenv').config();

//////////////////////
// Signup Endpoint //
////////////////////

router.post('/signup', function(req, res) {
  var payload = req.body;

  var userPassword = payload.password;
  var secretPassword = process.env.AUTHENTICATION_PASSWORD || null;
  var secretCookieToken = process.env.SECRET_COOKIE_TOKEN || null;

  if (secretPassword === userPassword) {
    return res.json({
      token: secretCookieToken
    })
  } else {
    return res.status(401).json({error: "Login Failure: Your password did not match"});
  }

});

/////////////////////////////////
// Verify Authorization Token //
///////////////////////////////

router.post('/verifyAuthToken', function(req, res) {
  var payload = req.body;

  var userToken = payload.token;
  var secretCookieToken = process.env.SECRET_COOKIE_TOKEN || null;

  console.log(userToken, secretCookieToken)
  if (userToken === secretCookieToken) {
    // console.log('verify token success')
    return res.status(200).send("Token Verification Successful");   

  } else {
    // console.log('verify token fail')
    return res.status(401).send("Token Verification Failure: Token did not match");
  }

});

module.exports = router;