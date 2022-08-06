const router = require('express').Router();
const userRoutes = require('./api');

router.use('/api', userRoutes);

router.use((req, res) => {
  res.status(404).send('api-404');
});

module.exports = router;
