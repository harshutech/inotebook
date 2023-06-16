import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "642eee7a53371be649096fc2",
          "user": "642d24dc46a9b18cb6aba917",
          "title": "alarm",
          "description": "Please wake up early",
          "date": "2023-04-06T16:08:26.868Z",
          "__v": 0
        },
        {
            "_id": "642eee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          },
          {
            "_id": "642eee7a53371be649096fc2",
            "user": "642d24dc46a9b18cb6aba917",
            "title": "alarm",
            "description": "Please wake up early",
            "date": "2023-04-06T16:08:26.868Z",
            "__v": 0
          }
      ]

      const [notes, setNotes]=useState(notesInitial)

    return(

    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}
export default NoteState;