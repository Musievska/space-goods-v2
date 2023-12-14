const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { User } = require('../../db');

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).send({ message: "Email already registered" });
    }

    const user = await User.create({ email, password }); 
    let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '24h' });
    res.cookie("jwt", token, { maxAge: 86400000, httpOnly: true });
    return res.status(201).send({ id: user.id, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error during signup");
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user && await bcrypt.compare(password, user.passwordHash)) {
      let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '24h' });
      res.cookie("jwt", token, { maxAge: 86400000, httpOnly: true });

      return res.status(201).send({ id: user.id, email: user.email });
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error during login");
  }
};

const checkUser = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send('No token provided');
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY); 
    const user = await User.findByPk(decoded.id); 

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};

const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(409).json({ message: "Email already registered" });
    } else {
      return res.status(200).json({ message: "Email is available" });
    }
  } catch (error) {
    console.error("Error checking email:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



module.exports = { signup, signin, checkUser, checkEmail };
