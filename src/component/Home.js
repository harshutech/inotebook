import React from 'react'
import Notes from './Notes'

function Home(props) {
const{showAlert}=props;
  return (
    <div>
      <Notes showAlert={showAlert}>

      </Notes>
    </div>
  )
}

export default Home;