const jobStatusController = require('../controllers/JobStatusController');
const router = require('express').Router();

router.post('/',jobStatusController.createJobStatus);
router.get('/',jobStatusController.getAllJobStatus);
router.get('/:jobStatus_id',jobStatusController.getJobStatusById);

module.exports = router;