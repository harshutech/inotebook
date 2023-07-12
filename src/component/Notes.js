import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { NoteItem } from './NoteItem';
import AddNotes from './AddNotes';
import { useNavigate } from 'react-router-dom'



const Notes = (props) => {
    let navigate = useNavigate();

    const context = useContext(noteContext);
    const { notes, getnotes, editNote} = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
        getnotes();
    } else {
        // do not try .push function that a old method here i applied latest method to redirect
        navigate('/login');
    }
}, []);

    const ref = useRef(null); // seted initial value is null that means by deafault modal is closed 
    const refclose = useRef(null);
    
    const [note, setnote] = useState({id: "", etitle: "", edescription: "", etag: "default" })

    // we imported useref functionality in our file , useref provides us functionality of reference any object 🍉

    const updatenote = (currentNote) => {
        ref.current.click(); //used for showing modal if close or close if showing 

        setnote({
            id: currentNote._id,
            etitle: currentNote.title, 
            edescription: currentNote.description, 
            etag: currentNote.tag
         });
    }

    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refclose.current.click();
        props.showAlert("Updated successfully", "success")

    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNotes showAlert={props.showAlert}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"  >Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"  >Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary" >Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-4'>
                <h1>Your Notes 📒</h1>
                <div className='conatiner mx-2'>
                {notes.length === 0 && "No notes to display"}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updatenote={updatenote} showAlert={props.showAlert} note={note} />
                    // we passed a props to NoteItem component 
                }
                )}
            </div>
        </>
    )
}

export default Notes;