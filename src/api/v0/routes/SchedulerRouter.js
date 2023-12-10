const Scheduler = require('../controllers/SchedulerController');
const router = require('express').Router();

router.post('/',Scheduler.createScheduler);
router.get('/',Scheduler.getAllSchedulers);
router.get('/:scheduler_id',Scheduler.getSchedulerById);


module.exports = router;