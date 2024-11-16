const express = require('express');
const axios = require('axios');
const router = express.Router();

// LinkedIn OAuth Config
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// Step 1: Redirect User to LinkedIn for Authorization
router.get('/authorize', (req, res) => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
    res.redirect(authUrl);
});

// Step 2: LinkedIn Callback to Exchange Authorization Code for Access Token
router.get('/callback', async (req, res) => {
    const authorizationCode = req.query.code;

    try {
        const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
            params: {
                grant_type: 'authorization_code',
                code: authorizationCode,
                redirect_uri: REDIRECT_URI,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            },
        });

        const accessToken = tokenResponse.data.access_token;
        res.json({ accessToken });
    } catch (error) {
        console.error('Error exchanging code for access token:', error.response.data);
        res.status(500).send('OAuth failed');
    }
});

module.exports = router;
