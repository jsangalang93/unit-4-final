const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongoose');
})

app.use(cors());
app.use(express.json());

const entryRouter = require('./controllers/entries.js');
app.use('/entries', entryRouter);

app.listen(3020, () => {
    console.log('Server is running on port 3020');
})