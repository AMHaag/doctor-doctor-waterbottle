/* fields:


    thoughtText
        String
        Required
        Must be between 1 and 280 characters

    createdAt
        Date
        Set default value to the current timestamp
        Use a getter method to format the timestamp on query

    username (The user that created this thought)
        String
        Required

    reactions (These are like replies)
        Array of nested documents created with the reactionSchema

Schema Settings

Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query. */

const { Schema, model } = require('mongoose');
const timestamp = require('date-fns/format');
let currentTime = timestamp(Date.now(), 'Pp');
console.log(currentTime);

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: 280,
  },
  createDate: {
    type: Date,
    default: Date.now(),
    get: (val) => {
    timestamp(val, 'Pp');
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [],
});
// ThoughtSchema.path('createdAt').get((val) => {
//   timestamp(val, 'Pp');
// });
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
