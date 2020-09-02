const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const mongoose = require('mongoose');
const morgan = require('morgan');
const MONGODB_URI = `mongodb+srv://newUser0013:${passwordAtlas}@reactcryptoapp.zipdp.mongodb.net/<dbname>?retryWrites=true&w=majority`

app.use(morgan('tiny'));
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongoose has been connected'))


















app.listen(PORT, () => console.log(`Listening on port ${PORT}`))