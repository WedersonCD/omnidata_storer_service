const SchedulerModel = require('../models/Scheduler');

const schedulerController = {}

schedulerController.createScheduler = async (req, res) => {
    
    if (!req.body.dataProduct) {
        return res.status(404).json({ message: 'dataProduct field is required' });
    }

    // Creating a new scheduler instance with data from the request body
    const newScheduler = new SchedulerModel({
        scheduler_slaCRON: req.body.scheduler_slaCRON,
        scheduler_nextExecutionAt: req.body.scheduler_nextExecutionAt,
        scheduler_externalSystem: req.body.scheduler_externalSystem,
        job_lastest: req.body.job_lastest,
        dataProduct: req.body.dataProduct
    });

    try {
        // Saving the new scheduler to the database
        const savedScheduler = await newScheduler.save();
        res.status(201).json(savedScheduler);
    } catch (err) {
        // Handling errors and sending an appropriate response
        res.status(400).json({ message: err.message });
    }
};

schedulerController.getSchedulerById = async (req, res) => {
    try {
        const scheduler_id = req.params.scheduler_id;
        const scheduler = await SchedulerModel.findById(scheduler_id)
                                       .populate('job_lastest')
                                       .populate('dataProduct');

        if (!scheduler) {
            return res.status(404).json({ message: 'Scheduler not found' });
        }

        res.status(200).json(scheduler);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

userController.getAllScheduler = async (req, res) => {
    try {
        const scheduler = await SchedulerModel.find();
        res.status(200).json(scheduler);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = schedulerController