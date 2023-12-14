const express = require('express');
const router = express.Router();

const { signup, signin, checkUser, checkEmail } = require('../controllers/userController'); 
const checkUserExist = require('../middleware/checkUserExist');

router.post('/sign-up', checkUserExist, signup);
router.post('/sign-in', signin);
router.post('/sign-out', (req, res) => {
  res.clearCookie('jwt');
  res.send('User signed out');
});
router.get('/check', checkUser)
router.post('/check-email', checkEmail);  


module.exports = router;