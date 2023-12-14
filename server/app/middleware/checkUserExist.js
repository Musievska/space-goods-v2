const { User } = require('../../db'); // Adjust the path as necessary

const checkUserExist = async (req, res, next) => {
  try {
    // Check if email already exists
    const emailExists = await User.findOne({
      where: { email: req.body.email }
    });

    if (emailExists) {
      return res.status(409).send("Email already in use");
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error checking user existence");
  }
};

module.exports = checkUserExist;
