const express = require('express');


const app = express();

app.use(express.json());
const port = process.env.PORT || 7000;

app.get('/testing', (req, res) => {
    res.status(200).json({message: 'Testing working'});
});

app.listen(port, () => console.log(`Server running on ${port}`));