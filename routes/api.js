const express = require('express');
const Student = require('../model/student');
const router = express.Router();

router.get('/students', function(req, res, next) {
    Student.find({}).then(function(students) {
        res.send(students);
    }).catch(next);
});

router.post('/students', function(req, res, next) {
    Student.create(req.body).then(function(student) {
        res.send(student);
    }).catch(next);
});
router.delete('/students/:name/:roll', function(req, res, next) {
    Student.findOneAndDelete({ name: req.params.name, roll: req.params.roll }).then(function(student) {
        res.send(student);
    });
});

module.exports = router;