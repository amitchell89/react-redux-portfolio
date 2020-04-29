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
    // return res.status(200).send("Login Successful");
    console.log('login success')
    return res.json({
      token: secretCookieToken
    })
  } else {
    console.log('login fail')
    // return res.status(401).send("Login Failure: Your password did not match");
    return res.status(401).json({error: "Login Failure: Your password did not match"});
  }

});



module.exports = router;