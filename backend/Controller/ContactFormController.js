const express = require('express');
const ContactForm = require('../model/contactForm');

exports.createContactForm = (req, res) => {
    const newContactForm = new ContactForm({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });
    newContactForm.save((err, contactForm) => {
        if(err)
        {
            res.status(500).json({ errmsg: err });
        }
        else{
            res.status(200).json({ msg: contactForm })
        }
        
    })
}

exports.getAll = (req,res) => {
    ContactForm.find({},(err, data) => {
        res.json(data)
    })
}

