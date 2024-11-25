const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');

const PORT = process.env.PORT ? process.env.PORT : 3000;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello app!');
})

// Routes go here
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);


app.listen(PORT, () => {
  console.log('The express app is ready!');
});
