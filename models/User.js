/* fields:
    username
        String
        Unique
        Required
        Trimmed

    email
        String
        Required
        Unique
        Must match a valid email address (look into Mongoose's matching validation)

    thoughts
        Array of _id values referencing the Thought model

    friends
        Array of _id values referencing the User model (self-reference)
*/

// add virtual that returns the length of the friends array

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^[a-z.]+@[a-z]+.[a-z]{2,3}$/gi],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: {},
});

const User = model('User', UserSchema);

module.exports = User;
