const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    scheduler_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scheduler',
        required: true
    },
    jobStatus_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobStatus',
        required: true
    },
    job_isLastest: { type: Boolean, default: true },
    job_isSuccessful: { type: Boolean },
    job_slaCRON: { type: String },
    job_startedAt: { type: Date, default: Date.now() },
    job_finishedAt: { type: Date },
    job_updatedAt: { type: Date },
    job_createdAt: { type: Date, default: Date.now() },
    job_nextExecutionAt: { type: Date },
    job_externalSystem: {
        scheduler_externalSystem_name: { type: String },
        scheduler_externalSystem_link: { type: String },
        scheduler_externalSystem_externalId: { type: String },
        scheduler_externalSystem_statusId: { type: String },
        scheduler_externalSystem_statusName: { type: String },
    }
});

//Set new updated date
JobSchema.pre('save', function (next) {
    this.job_updatedAt = new Date();
    next();
});

JobSchema.pre('save', function (next) {
    const job = this;

    if (job.job_isLastest) {

        //if the job is the lastest, set other jobs from the same scheduler job_isLastest to false.
        mongoose.model('Job').updateMany(
            {
                job_isLastest: true,
                _id: { $ne: job._id },
                scheduler_id: job.scheduler_id
            },
            { $set: { job_isLastest: false } }
        ).exec();

        //set the lastest job in the Scheduler
        mongoose.model('Scheduler').updateOne(
            { scheduler_id: job.scheduler_id },
            { job_lastest: job._id }
        ).exec();
    }

    next();
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
