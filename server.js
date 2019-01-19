const marker = require('@ajar/marker')
const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.status(200).send('Hello Express!')
})

app.get('/users', (req, res) => {
    res.status(200).send('Get all Users')
})

app.post('/users',  (req, res) => {
    res.status(200).send('create a new User')
})

app.get('*',  (req, res) => {
    res.status(404).send('My 404 not found')
})

app.listen(3030,  err => {
    if(err) marker.error(err);
    else marker.magenta(`🌎  Express: `,`http://localhost:3030`);
});



// install middleware - body-parser morgan
// configuring app middleware like so:
// app.use( morgan('dev') );
//----------------------------
// define routes which use
//----------------------------
// req.query
// req.params
// req.body

// return api json dummy response
// return html markup dummy response

