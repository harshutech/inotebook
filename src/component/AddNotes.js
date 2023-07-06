import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';


const AddNotes = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setnote] = useState({ title: "", description:"", tag: "default" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="box my-4">
            <h2>ADD NOTES 📝</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control" onChange={onchange}
                        id="title" name="title" aria-describedby="emailHelp"
                        placeholder="Enter title here" minLength={5} required/>
                </div><br/>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' className="form-control" onChange={onchange}
                        id="description" placeholder="Enter description here"  minLength={5} required/>
                </div><br/>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick} >ADD NOTE</button>
                <hr/>
            </form>
        </div>
    )
}

export default AddNotes;