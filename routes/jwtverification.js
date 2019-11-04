let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
  // let token = req.headers
  // console.log(req.body.jwttoken)
  let token = req.body.jwttoken; // Express headers are auto converted to lowercase
  // console.log(req.body)
  // console.log(req)
  if (token == null){
    token = req.headers.jwttoken
    // console.log(req.headers)
  }
  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        // console.log(decoded)
        req.decoded = decoded;
        next();
      }
    });
  }
  
  else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}