const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const mongoose = require('mongoose');
const morgan = require('morgan');
const passwordAtlas = 'User123'

app.use(morgan('tiny'));
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongoose has been connected'))


















app.listen(PORT, () => console.log(`Listening on port ${PORT}`))