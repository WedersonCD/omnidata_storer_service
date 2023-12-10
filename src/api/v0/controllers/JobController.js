const JobModel = require('../models/Job');

const jobController = {}

// Function to create a new job
jobController.createJob = async (req, res) => {
    const newJob = new JobModel({
        scheduler_id: req.body.scheduler_id,
        jobStatus_id: req.body.jobStatus_id,
        job_isLastest: req.body.job_isLastest,
        job_isSuccessful: req.body.job_isSuccessful,
        job_slaCRON: req.body.job_slaCRON,
        job_startedAt: req.body.job_startedAt,
        job_finishedAt: req.body.job_finishedAt,
        job_updatedAt: req.body.job_updatedAt,
        job_createdAt: req.body.job_createdAt,
        job_nextExecutionAt: req.body.job_nextExecutionAt,
        job_externalSystem: req.body.job_externalSystem
    });

    try {
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a specific job by job_id
jobController.getJobById = async (req, res) => {
    try {
        const jobId = req.params.job_id;
        const job = await JobModel.findById(jobId).populate('scheduler_id').populate('jobStatus_id');

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

jobController.updateJobById = async(req,res)=>{
    try {
        const jobId = req.params.job_id;
        
        const job = await JobModel.findByIdAndUpdate({job_id: jobId},req.body)

        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

jobController.getAllJobs = async (req, res) => {
    try {
        const jobs = await JobModel.find().populate('scheduler_id').populate('jobStatus_id');
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = jobController;