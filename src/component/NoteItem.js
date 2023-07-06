import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';


export const NoteItem = (props) => {
    const { note, updatenote } = props;
    // here we take a prop of update note which is exported or proped by notes.js file 
    const context = useContext(noteContext);
    const { deleteNote } = context;


    return (
        <div className="card my-5 mx-1 border rounded" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{note.description}</h6>
                <p className="card-text">{note.tag}</p>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
            </div>
        </div>


    )
}
