const JobStatusModel = require('../models/JobStatus');

const jobStatusController = {}

// Function to create a new job status
jobStatusController.createJobStatus = async (req, res) => {
    try {
        const { jobStatus_name } = req.body;

        if (!jobStatus_name) {
            return res.status(400).json({ message: "jobStatus_name field is required." });
        }

        const newJobStatus = new JobStatusModel({ jobStatus_name });

        // Save the job to the database
        await newJobStatus.save();

        // Send success response
        res.status(201).json(newJobStatus);
    } catch (error) {
        // Send error response
        res.status(500).json({ message: error.message });
    }
};

jobStatusController.getAllJobStatus = async (req, res) => {
    try {
        const jobsStatus = await JobStatusModel.find();
        res.status(200).json(jobsStatus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

jobStatusController.getJobStatusById = async (req, res) => {
    try {
        const jobsStatus = await JobStatusModel.findByid(req.params.jobStatus_id);
        res.status(200).json(jobsStatus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = jobStatusController;