const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then(
        hash => {
            const user = new User({
                email: req.body.email,
                // npm install --save bcrypt
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            });
            user.save()
                .then(
                    result => {
                        res.status(201).json({
                            message: "User added successfully",
                            result: result
                        });
                    })
                .catch(err => {
                    res.status(500).json({
                        eror: err
                    })
                });
        }
    );

});

router.post("/login", (req, res) => {
    let gettedUser;
    console.log('REQ body', req.body);

    User.findOne({ email: req.body.email })
        .then(user => {
            console.log("USER", user);

            if (!user) {
                // 401 : authentification échouée
                // 404 : not found
                return res.status(401).json({
                    message: "Auth failed"
                })
            };
            gettedUser = user;
            console.log("Getted user", gettedUser);

            return bcrypt.compare(req.body.password, user.password)
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            // Create new jeton
            // secret_key: sera enregistré que sur le serveur et utilisé pour valider les requests
            const token = jwt.sign({ email: gettedUser.email, userId: gettedUser._id },
                'secret_key', { expiresIn: '1h' });
            console.log("Token, ", token);
            res.status(200).json({
                message: "OK",
                token: token,
                expiresIn: 3600
            })
        })
        .catch(err =>  {
            console.log("Erroe", err);

            return res.status(401).json({
                message: 'Auth failed'
            })
        })
})


module.exports = router;

// miidelware : fonction qui fait l'analyse de la demande request puis décider si cette demande est autorisée ou non