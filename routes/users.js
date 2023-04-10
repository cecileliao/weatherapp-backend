const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.post('/signup', (req, res) => {
    // Si l’email ou le mdp renvoyé est indéfini ou vide, renvoyez : { result:   false, error: 'Missing or empty fields' }.
    if (!checkBody(req.body, ['name', 'email', 'password'])) {
        res.json({ result: false, error: 'Missing or empty fields' })
        return;
    }
    // POST /signup : route chargée d’inscrire un utilisateur dans la collection Users.
    // Sinon, renvoyez : { result: true }.
    User.findOne({email: req.body.email})
        .then(data => {
        if (data === null) {
            const newUser = new User ({
                name: req.body.name, 
                email: req.body.email,
                password: req.body.password,
            });
            
            newUser.save().then(newDoc => {
                res.json({result: true});
            });
    // Si l’email est déjà enregistré dans la base de données, renvoyez : { result: false, error: 'User already exists' }.
        } else {
            res.json({ result: false, error: 'User already exists' });
        }
        });
});

router.post('/signin', (req, res) => {
    if (!checkBody(req.body, ['email', 'password'])) {
        res.json({result: false, error: 'Missing or empty fields'});
        return;
    }
    User.findOne({email: req.body.email, password: req.body.password})
    .then(data => {
        if (data) {
            res.json({result: true})
        } else {
            res.json({result: false, error: 'User not found'})
        }
    });
});




module.exports = router;