const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

// API Endpoint to Send Notification
router.post('/send', async (req, res) => {
    const { token, message } = req.body;

    const payload = {
        notification: {
            title: 'New LinkedIn Post!',
            body: message,
        },
    };

    try {
        const response = await admin.messaging().sendToDevice(token, payload);
        res.json({ success: true, response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).send('Notification failed');
    }
});

module.exports = router;
