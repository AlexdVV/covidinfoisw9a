const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Clima = require("../model/proyecto");

router.get('/',auth, (req, res) => {
    climaQuery = Clima.find()
    climaQuery.then(clima => {
        try {
            res.status(200).json({
                clima
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get('/ByState/:nes',auth, (req, res) => {
    climaQuery = Clima.find( {nes : req.params.nes})
    climaQuery.then(clima => {
        try {
            res.status(200).json({
                clima
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get("/ByCity/:nmun",auth, (req, res) => {
    Clima.findOne({ nmun: req.params.nmun }).then(clima => {
        try {
            res.status(201).json({
                clima
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get('/:nes/:nmun',auth, (req, res) => {
    Clima.find( {nmun: req.params.nmun , nes: req.params.nes} ).then(clima => {
        try {
            res.status(200).json({
                clima
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.post('/crear',auth, (req, res) => {
    const clima = new Clima({
        nes: req.body.nes,
        nmun: req.body.nmun,
        tmax: req.body.tmax,
        tmin: req.body.tmin,
    });  
    console.log(clima);
    clima.save().then(clima => {
        res.status(201).json({
            message: 'proyecto create!',
            clima: clima
        });
    }).catch(error => {
        console.log(error);
        res.status(502).json({
            message: 'error al crear proyecto'
        });
    });
});

module.exports = router;