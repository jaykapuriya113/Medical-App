const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// router.param('id',(req,res,next,val) =>{
//     console.log(`Tour id is: ${val}`);
//     next();
// })

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.updateUser);

  // router.delete('/deleteall',userController.deleteAll);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
