// LOAD Data from data source 'db.json'
const notesData = require("../db/db.json");
// const fs = require('fs');

// ROUTING
module.exports = function (app, fs) {

    // API GET Request
    app.get("/api/notes", (request, response) => {

        response.send(notesData);
    });

    // API POST Request
    app.post("/api/notes", (request, response) => {

        // Extracted new note from request.  
        const newNote = request.body;

        // Pushed new note in notes file 'db.json'
        notesData.push(newNote);

        // Written notes data to 'db.json' file
        fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
            
            if(err) throw(err);
            
            console.log("Successfully added new note to 'db.json' file!");

        });

        console.log("Notes : "+JSON.stringify(notesData));

        response.json(newNote);
    });
};
