const JobController = require('../controllers/JobController');
const router = require('express').Router();

router.post('/',JobController.createJob);
router.get('/',JobController.getAllJobs);
router.get('/:job_id',JobController.getJobById);
router.put('/:job_id',JobController.updateJobById)

module.exports = router;