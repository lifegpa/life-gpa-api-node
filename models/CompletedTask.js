const mongoose = require('mongoose');

const CompletedSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tasks'
    },
    completed: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Task = mongoose.model("completedTasks", CompletedSchema);
