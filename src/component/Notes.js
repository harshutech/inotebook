import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import { NoteItem } from './NoteItem';
import AddNotes from './AddNotes';

const Notes = () => {

    const context = useContext(noteContext);
    const { notes,getnotes } = context;
    useEffect(() => {
      getnotes();

    }, [])
    

    return (
        <>
        <AddNotes/>
        <div className='row my-4'>
            <h1>Your Notes 📒</h1>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note}/>
            }
            )}
        </div>
        </>
    )
}

export default Notes;