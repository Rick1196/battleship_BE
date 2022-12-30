const { auth } = require("../config/firebaseConfig");
const sessionMiddleware = (req, res, next) => {
  const idToken = req.headers["idToken"];
  if (idToken) {
    auth
      .verifyIdToken(idToken)
      .then(() => {
        next();
      })
      .catch(() => {
        res.status(500).send("Currently we can verify your identity");
      });
  } else {
    res.status(403).send("You must be logedin");
  }
};
module.exports = sessionMiddleware;
