const express = require("express");
const router = express();

const {create, read, photo2} = require('../Controller/ProfileController')

router.post('/createProfile',create);
router.get('/getProfile',read );
router.get('/profile/photo/:profileId', photo2);


module.exports = router;