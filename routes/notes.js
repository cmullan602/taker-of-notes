
const router = require('express').Router();
const { notes } = require('../db/db.json');
const { createNote, deleteNote } = require('../helpers/fsUtils');
const { v4:uuidv4 } = require('uuid');


//get route for retrieving notes 
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

//post route for new note 
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    res.json(createNote(req.body, notes));
})

router.delete('/notes/:id', (req, res) => {
    const params = req.params.id;
    deleteNote(params, notes);
    res.redirect("");
})

module.exports = router;