const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config');

// Pick environment (default: development)
const env = process.env.NODE_ENV || 'development';
const mongoURI = config.mongoURI[env];

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err) {
        console.error("❌ Mongo connection error:", err);
    } else {
        console.log(`✅ MongoDB connected to ${env} database`);
    }
});

// Initialize Express
const app = express();

// View engine
app.set('view engine', 'ejs');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());

// Routes
let index = require('./routes/index');
let image = require('./routes/image');
app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:8080`);
});
