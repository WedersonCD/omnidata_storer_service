const mongoose = require('mongoose');

const JobStatusSchema = new mongoose.Schema({
    jobStatus_name: { type: String, required: true },
    job_updatedAt: { type: Date },
    job_createdAt: { type: Date, default: Date.now() }
});

const JobStatus = mongoose.model('JobStatus', JobStatusSchema);

module.exports = JobStatus;
