const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const authRoute = require('./routes/auth')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
dotenv.config();

app.use(express.json());
app.use('/api/user', authRoute)
app.use(morgan('tiny'));

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongoose has been connected'))









app.listen(PORT, () => console.log(`Listening on port ${PORT}`))