const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  postNewThought,
} = require('../../controllers/thought-controller');

// /api/thought

router.route('/').get(getAllThoughts).post(postNewThought);

// /api/thought/:id

router.route('/:id').get(getThoughtById);

module.exports = router;
