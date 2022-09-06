import React, { useState } from "react";

function CreateArea(props) {
  const [noteItem,setNote] = useState({title:"",content:""});

  function handleChange(event) {
    const {name,value} = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }
  function handleClick(event) {
    props.onAdd(noteItem)
    setNote({title:"",content:""})
    event.preventDefault()
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={noteItem.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={noteItem.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
