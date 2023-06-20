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
        <div className="container">
            <h2>ADD NOTES</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" onChange={onchange}
                        id="title" name="title" aria-describedby="emailHelp"
                        placeholder="Enter title here" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <input type="text" name='description' className="form-control" onChange={onchange}
                        id="description" placeholder="Enter description here" />
                </div>

                <div className="form-group form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        <input type="checkbox" className="form-check-input"
                            id="exampleCheck1" />Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>ADD NOTE</button>
            </form>
        </div>
    )
}

export default AddNotes;