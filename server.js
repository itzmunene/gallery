const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./_config');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// Pick environment (default: development)
const env = process.env.NODE_ENV || 'development';
console.log('ENV:', env);
console.log('Config:', config);
 
// Use Render environment variable
const mongoURI = process.env.MONGO_URI_PRODUCTION || config.mongoURI;

// Connect to MongoDB
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.error("❌ MongoDB connection error:", err);
});

// Test DB connection
let db = mongoose.connection;
db.once('open', () => {
    console.log(`✅ Database connected successfully to ${env} database`);
});

// Initialize the app
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());

app.use('/', index);
app.use('/image', image);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is listening at http://localhost:${PORT}`);
});
