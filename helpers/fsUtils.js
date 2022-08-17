const fs = require('fs');
const util = require('util');
const path = require('path');



const createNote = (body, notes) => {
    let note = body;
    notes.push(note)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(
          {
            notes: notes,
          },
          null,
          2
        )
      );
      return note
}

const deleteNote = (id, notes) => {
  for(let i = 0; i < notes.length; i++){
    if (id === notes[i].id){
      notes.splice(i, 1)
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(
          {
            notes: notes,
          },
          null,
          2
        )
      );
    }
  }
  
}

module.exports = { createNote, deleteNote };
