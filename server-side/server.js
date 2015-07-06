/**
 * Created by ianchenguo on 6/07/15.
 */

'use strict';

var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var user = {
  username: 'chen',
  password: 'chen'
};
var jwtSecret = 'asd*f20938_@usn&cdv04328';


var server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(expressJwt({secret:jwtSecret}).unless({path:['/login']}));

server.get('/random-user', function (req, res) {
  var user = faker.helpers.userCard();
  user.avatar = faker.image.avatar();
  res.json(user);
});

server.get('/me', function(req,res) {
  res.send(req.user);
});

server.listen(3000, function () {
  console.log('App listening on localhost:3000');
});

server.post('/login', authentication, function (req, res) {

  var token = jwt.sign({
    username:user.username
  }, jwtSecret);

  res.send({token:token,user:user});
});

function authentication(req, res, next) {
  var body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end('Must provide username or password');
  }
  if (body.username !== user.username || body.password !== user.password) {
    res.status(401).end('Username or password incorrect');
  }
  next();
}
