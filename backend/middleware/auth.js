const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    //console.log('autho ' + req.headers.authorization)
    //console.log('token' + req.headers.authorization.split(' ')[1])
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //console.log(decodedToken)
    const userId = decodedToken.userId;
    // console.log(userId)
    const moderator = decodedToken.moderator
    console.log(moderator)
    if (req.body.userId && req.body.userId !== userId || req.body.moderator == false ) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
