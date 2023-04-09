import React, { useState } from 'react'

function FormController(props) {

  let [userInput, setUserInput] = React.useState(props.initial)
  
  function handleNewState(e) {
    setUserInput("")
  }
  
  function emptyState() {
    console.log("Cleaning state; previous was", userInput)
    handleNewState()
  }
  
  return props.children({
    userInput,
    handleNewState,
    emptyState,
    setUserInput
  })
}

export default FormController
