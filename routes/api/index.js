const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

router.use((req, res) => {
  res.status(404).send('404-user');
});

module.exports = router;
