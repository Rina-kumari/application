const express = require("express");
const router = express();

const {createContactForm, getAll} = require('../Controller/ContactFormController');

router.post('/contact-create',createContactForm);
router.get('/getAllContact', getAll);

module.exports = router;