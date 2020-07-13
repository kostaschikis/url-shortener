const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../model/Url');

// @route   POST/api/url/shorten
// @desc    Create short URL
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseURL');

    // Check base url 
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    // Create url code
    const urlCode = shortid.generate();

    // Check long url
    if (validUrl.isUri(longUrl)) {
        try {
            // If the long url exist in the database
            let url = await Url.findOne({ longUrl });

            if (url) {
                // Send the data from DB
                res.json(url);
            } else {
                // Create new short url bases on the long url
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid long url');
    }
});

module.exports = router;