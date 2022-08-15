const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('./helpers/fsUtils.js');
const { v4: uuidv4 } = require('uuid');


//get route for retrieving notes 
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post route for new note 
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newTip, '.db/db.json');
        res.json('Note added successfully');
    }else {
        res.errored('Error in adding note.');
    }
})

module.exports = notes;