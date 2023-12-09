const mongoose = require('mongoose');

const SchedulerSchema = new mongoose.Schema({
    scheduler_id: {type: mongoose.Schema.Types.ObjectId,auto: true},
    scheduler_slaCRON: { type: String},
    scheduler_createdAt: { type: Date, required: true, default: Date.now() },
    scheduler_updatedAt: { type: Date},
    scheduler_nextExecutionAt: { type: Date},
    scheduler_externalSystem: {
        scheduler_externalSystem_name: {type: String},
        scheduler_externalSystem_link: {type: String},
        scheduler_externalSystem_externalId: {type: String}
    },
    job_lastest:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: false
    },
    dataProduct:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DataProduct',
        required: true
    }
});

SchedulerSchema.pre('save', function(next) {
    this.scheduler_updatedAt = new Date();
    next();
});


const Scheduler = mongoose.model('Scheduler', SchedulerSchema);

module.exports = Scheduler;
