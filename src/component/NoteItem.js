import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';


export const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;


    return (
        // <div className='col my-5 mx-5 border rounded'>
        //     <div className="card m-1"/>
        //             <div className="card-body">
        //                 <h5 className="card-title">{note.title}</h5>
        //                 <p className="card-text">{note.description}</p>
        //                 <p className="card-text">{note.tag}</p>
        //                 <i className="fa-solid fa-trash mx-2"  onClick={()=>{deleteNote(note._id)}}></i>
        //                 <i className="fa-solid fa-pen-to-square mx-2"></i>
        //             </div>
        //     </div>

        <div class="card my-5 mx-1 border rounded" style={{ width: '18rem' }}>
            <div class="card-body">
                <h5 class="card-title">{note.tittle}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{note.description}</h6>
                <p class="card-text">{note.tag}</p>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
        </div>


    )
}
