const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('./config/db');
const indexRouter = require('./routes/index');

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
