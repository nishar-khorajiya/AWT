const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personalInfoRoutes = require('./routes/personalinfoRoutes');
const app = express();
const port = process.env.PORT || 3000;
 
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CHARUSAT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});
 
// Middleware for parsing JSON
app.use(bodyParser.json());
 
// Routes
app.use('/personal-info', personalInfoRoutes);
 
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 
module.exports = app;