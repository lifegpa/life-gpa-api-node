const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    category: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Task = mongoose.model("tasks", TaskSchema);
