const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  postNewUser,
  udpateUserById,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

//! /api/user
router.route('/').get(getAllUsers).post(postNewUser);

//! /api/user/:id
router.route('/:id').get(getUserById).put(udpateUserById).delete(deleteUser);

//! /api/user/:id/fiends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);
module.exports = router;
