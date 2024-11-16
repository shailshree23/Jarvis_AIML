const express = require('express');
const dotenv = require('dotenv');
const linkedinRoutes = require('./linkedin');
const notificationRoutes = require('./notifications');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/linkedin', linkedinRoutes);
app.use('/api/notifications', notificationRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
