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

router.put("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    Task.findById(req.params.id)
        .then(task => {


            if (task.user == req.user.id) {
                Task.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
                    .then(task => {
                        return res.status(204).json(task);
                    });
            }
            else {
                res.status(404).json({message: `No task found with id: ${req.params.id}`})

            }
        })
});

router.delete("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            if (task.user == req.user.id) {
                Task.findByIdAndRemove(req.params.id)
                    .then(task => {
                        return res.status(204).json(task);
                    })
            }
            else {
                res.status(400).json({message: `Task id: ${req.params.id} not found`})
            }
        });
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