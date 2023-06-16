import React from 'react'

export const NoteItem = (props) => {
    const { note } = props;

    return (
        <div className='col my-5 mx-5 border rounded'>
            <div class="card m-1"/>
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                    </div>
            </div>
        
    )
}
