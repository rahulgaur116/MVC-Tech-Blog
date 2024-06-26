const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./dashroutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;