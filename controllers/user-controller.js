/* 
TODO: Needed Methods

 Get all users~ 
// Get user by ID
// Post new user 
// Put to update user by ID
// Delete user by ID

* /Bonus/
- Remove a user's associated thoughts when deleted

?? Add /api/users/:userId/s/:Id
- Post to add new 
- Delte to remove from list

*/

const { User } = require('../models');

const userController = {
  getAllUsers: function (req, res) {
    User.find()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getUserById: function ({ params }, res) {
    User.findOne({ _id: params.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  postNewUser: function ({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  udpateUserById: function ({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  deleteUser: function ({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
