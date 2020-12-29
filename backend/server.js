const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const authRoute = require('./routes/auth')
const userRoutes = require('./routes/routes')
var cors = require('cors')

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
dotenv.config();

app.use(cors())
app.use(express.json());
app.use('/api/user', authRoute)
app.use('/user', userRoutes)
app.use(morgan('tiny'));


mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongoose has been connected'))









app.listen(PORT, () => console.log(`Listening on port ${PORT}`))