const express = require("express");
const router = express.Router();
var Projects = require("../models/project.js")
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



router.get('/project', (req, res) => {
    Projects.find()
    .then(Contestant =>{
        res.send({success:true,data:Contestant})
    })
    .catch(err =>{
        res.send({success:false,err:err})
    })
})

// name
// description
// location
// progress
// status
// budget

router.post('/project', upload.single('image'), (req, res, next) => {
    const file = req.file
    const body = req.body
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    if(body.name == "" || body.description == "" || body.location == "" || body.status == ""){
       return res.status(400).send({success:false,msg:"Name, company, title and role fields must not be empty"})
    }
    const bodyObj = {
        name: body.name,
        description: body.description,
        location: body.location,
        image_url: file.filename,
        image_type: file.mimetype,
        progress: body.progress,
        status: body.status,
        budget: body.budget
    }
    Projects.create(bodyObj, function(err, Contestant){
        if(err) {
            console.log(err) 
            return res.send(err);}
            res.send(Contestant);
    });
})


router.delete('/project/:id', (req, res) => {
    Projects.findByIdAndDelete(req.params.id,function(err, Contestant){
        if(err) res.send(err);
            res.send(Contestant);
    });
})


module.exports = router
