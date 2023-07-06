const express = require('express');
var fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../modules/Notes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: get all the notes using ; GET "/api/notes/fetchallnotes" ,login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('internal Error ');
    }


})


// ROUTE 2: Add a new notes using ; GET "/api/notes/addnote" ,login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag, } = req.body;
        // if there are errors return bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save();
        res.json(saveNote)


    } catch (error) {
        console.log(error.message);
        res.status(500).send('internal Error ');
    }
})

// ROUTE 3: update a  notes using ; GET "/api/notes/addnote" ,login required
router.put('/updatenote/:id', fetchuser,async (req, res) => {
    const{title,description,tag}=req.body;

    try {

    // create a new note object
    const newnote ={};
    if(title){newnote.title=title};
    if(description){newnote.description=description};
    if(tag){newnote.tag=tag};

    // find the note to be updated and update it
    let note =await Note.findById(req.params.id);
    if(!note){res.sendStatus(404).send("Not Found")}

    if(note.user.toString()!== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id,{$set: newnote},{new:true});
    res.json({note});
            
} catch (error) {
    console.log(error.message);
    res.status(500).send('internal Error ');
}

})


// ROUTE 3: delete notes using ; GET "/api/notes/deletenote" ,login required
router.delete('/deletenote/:id', fetchuser,async (req, res) => {
    try {

    // find the note to be delete and delete it
    let note =await Note.findById(req.params.id);
    if(!note){
        res.status(404).send("Not Found")
    }

    // allow deletion only if user owns this note
    if(note.user.toString()!== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"Success": "Note has been deleted",note:note});

} catch (error) {
    console.log(error.message);
    res.status(500).send('internal Error ');
}
})
module.exports = router;