const router = require('express').Router()
const User = require('../models/User')

router.post('/register', async(req, res) => {
    res.send('Register')
        //     const user = new User({
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: req.body.password,
        //         date: Date.now
        //     });
        //     try {
        //         const savedUser = await user.save()
        //         res.send(savedUser)
        //     } catch (error) {
        //         res.status(400).send(error)
        //     }
});

router.post('/login', (req, res) =>
    res.send('login')
);

module.exports = router;