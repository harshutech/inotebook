import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "42eee7a53371be649096fc2",
          "user": "642d24dc46a9b18cb6aba917",
          "title": "alarm",
          "description": "Please wake up early",
          "date": "2023-04-06T16:08:26.868Z",
          "__v": 0
        },
        {
            "_id": "62eee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642ee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a53371be64906fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a5371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a53371be6096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          }
      ]

      const [notes, setNotes]=useState(notesInitial)

      // add a note
      const addNote = (tittle,description,tag)=>{
        // API call
        console.log("Adding a note");
        const note =  {
          "_id": "642eee7a53371be649096fc2",
          "user": "642d24dc46a9b18cb6aba917",
          "title": tittle,
          "description": description,
          "date": "2023-04-06T16:08:26.868Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }

      // delete a note
      const deleteNote = ()=>{
        console.log("deleted");
      }

      // edit a note
      const editNote = ()=>{
        
      }

    return(

    <NoteContext.Provider value={{notes, setNotes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
    )
}
export default NoteState;