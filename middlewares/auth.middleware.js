const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401).json({error: "unauthenticated"})
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
        return res.status(403).json({error: "unauthorized"})
    }

    req.user = user

    next()
  })
}

module.exports = authenticateToken;