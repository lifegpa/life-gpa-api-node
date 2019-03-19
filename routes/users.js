const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');



const keys = require('../config/keys');
const User = require('../models/User');


const router = express();

// @route  Get api/users/register
// @desc   Register new user
// @access Public
router.post('/register', (req, res) => {

    User.findOne({email: req.body.email})
        .then(user => {

            if (user) {
                return res.status(400).json({email: 'Email already exists'});
            }
            else {

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(14, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {

                        if (err) throw err;

                        newUser.password = hash;

                        newUser.save()
                            .then(user => {
                                res.json(user)
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        })
        .catch(err => console.log(err));
});

router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({email})
        .then(user => {

            if (!user) {
                return res.status(404).json({error: 'Account not found'});
            }


            bcrypt.compare(password, user.password)
                .then(isMatch =>  {

                    if (isMatch) {

                        const payload = {id: user.id, name: user.name, email: user.email};


                        jwt.sign(payload, keys.secret,
                            {expiresIn: 3600},
                            (err, token) => {

                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });

                            });

                    }
                    else {
                        return res.status(400).json({error: 'Password is incorrect'});
                    }
                });
        })
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});
module.exports = router;