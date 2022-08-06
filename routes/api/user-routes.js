const router = require('express').Router();
const {
  getAllUsers,
  createNewUser,
  getUserById,
  postNewUser,
  udpateUserById,
  deleteUser,
} = require('../../controllers/user-controller');

// /api/user
router.route('/').get(getAllUsers).post(postNewUser);

module.exports = router;
