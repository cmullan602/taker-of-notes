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

module.exports = { createNote};
