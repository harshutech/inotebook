import { json } from "react-router-dom";
import NoteContext from "./noteContext";
import { useState } from "react";

function NoteState(props) {
  const host = "http://localhost:3000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)


  //get all note
  const getnotes = async () => {
    // API call pending 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDI0ZGM0NmE5YjE4Y2I2YWJhOTE3In0sImlhdCI6MTY4MDc2NzgzMX0.9gB9FtuVzZk7-VXCGX7wftswjRbb74r9XORPnhz2l48"
      },
    });
    const json = await response.json();
    setNotes(json);
  }



    // add a note
    const addNote = async (title, description, tag) => {
      // API call pending 
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDI0ZGM0NmE5YjE4Y2I2YWJhOTE3In0sImlhdCI6MTY4MDc2NzgzMX0.9gB9FtuVzZk7-VXCGX7wftswjRbb74r9XORPnhz2l48"
        },
        body: JSON.stringify({ title, description, tag })
      }); 

      const note = await response.json();
      setNotes(notes.concat(note))
    }

    // delete a note
    const deleteNote = async(id) => {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDI0ZGM0NmE5YjE4Y2I2YWJhOTE3In0sImlhdCI6MTY4MDc2NzgzMX0.9gB9FtuVzZk7-VXCGX7wftswjRbb74r9XORPnhz2l48"
        },
      }); 
      const json = response.json();
      console.log(json);

      // API call pending 
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
    }


    // edit a note
    const editNote = async (id, title, description, tag) => {
      // API call pending 

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyZDI0ZGM0NmE5YjE4Y2I2YWJhOTE3In0sImlhdCI6MTY4MDc2NzgzMX0.9gB9FtuVzZk7-VXCGX7wftswjRbb74r9XORPnhz2l48"
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json();
      console.log(json)

      // logic to edit in client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }

      }
    }

    return (

      <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getnotes }}>
        {props.children}
      </NoteContext.Provider>
    )
    }
  export default NoteState;