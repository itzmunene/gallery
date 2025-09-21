const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// MongoDB Atlas connection string (with encoded password)
const mongodb_url = 'mongodb+srv://munene:Ofof%402025@projectcluster1.9ycirzi.mongodb.net/darkroom?retryWrites=true&w=majority&appName=projectcluster1';

mongoose.connect(mongodb_url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err) console.error("❌ MongoDB connection error:", err);
});

// test if the database has connected successfully
let db = mongoose.connection;
db.once('open', () => {
    console.log('✅ Database connected successfully');
});

// Initializing the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json());

app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});
