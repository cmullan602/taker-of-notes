const express = require("express");
const path = require('path');
const app = express();
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;

//Middleware for parsing JSON and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//Get Route for retrieving notes
app.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, 'public/notes.html' ))

});

//get route for retri
app.get('api/routes', (req, res) => {

})

//wildcard route 
app.get('*', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen( PORT, () => {
    console.log('Server up!');
});