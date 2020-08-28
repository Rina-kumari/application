const Profile = require("../model/Profile");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        // check for all fields
        const {name, detail, skills} = fields
        if(!name || !detail || !skills) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        let profile = new Profile(fields)

        if(files.photo) {
            profile.photo.data = fs.readFileSync(files.photo.path)
            profile.photo.contentType = files.photo.type
        }
        profile.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: console.log("error")
                })
            }
            res.json(result);
        })
    })
}

exports.read = (req, res) => {


    Profile.find()
        .select("-photo")
        .exec((err, profiles) => {
            if(err) {
                return res.status(400).json({
                    error: 'Profile not found'
                });
            }
            res.json(profiles);
        })
}


exports.photo2 = (req, res, next) => {
    if(req.profile.photo.data) {
        res.set('Content-Type', req.profile.photo.contentType);
        return res.send(req.profile.photo.data);
    }
    next();
}