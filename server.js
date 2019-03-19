const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');

const users = require('./routes/users');
const tasks = require('./routes/tasks');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({}));
const db = require('./config/keys').mongoURL;
mongoose
    .connect(db)
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);
const port = process.env.PORT || 7000;

app.use('/api/users', users);
app.use('/api/tasks', tasks);

app.get('/testing', (req, res) => {
    res.status(200).json({message: 'Testing working'});
});

app.listen(port, () => console.log(`Server running on ${port}`));