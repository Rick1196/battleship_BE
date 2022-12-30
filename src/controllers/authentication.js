require("dotenv").config();
const { auth } = require("../config/firebaseConfig");
const CryptoJS = require("crypto-js");
const login = (req, res) => {
  const token = req.body?.token;
  if (token) {
    auth
      .verifyIdToken(token)
      .then(() => {
        res
          .cookie("credentials", token, { httpOnly: true, signed: true })
          .json({ message: "Welcome" });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    res.status(403).send("Empty token");
  }
};

const logout = (req, res) => {
  res.clearCookie("credentials").send();
};

module.exports = { login, logout };
