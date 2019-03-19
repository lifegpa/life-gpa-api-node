const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/User');
const Task = require("../models/Task");

const router = express();

// create new task
router.post("/", passport.authenticate('jwt', {session: false}), (req, res) => {
    let taskFields = {};
    taskFields.user = req.user.id;
    taskFields.category = req.body.category;
    taskFields.name = req.body.name;
    taskFields.completed = req.body.completed;


    new Task(taskFields).save().then(task => res.json(task));
});

router.get("/", passport.authenticate('jwt', {session: false}), (req, res) => {

    Task.find({user: req.user.id})
        .then(tasks => {
            if (tasks.length === 0) {
                res.status(400).json({message: 'You have not created any tasks yet'})
            }
            else {
                res.status(200).json(tasks);
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;