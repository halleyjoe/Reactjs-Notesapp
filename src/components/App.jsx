import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items,setItems] = useState([]);

  function addItem(note) {
    setItems(prevValue => {
      return [...prevValue,note]
    })
  }
  function pressDelete(id) {
    setItems(prevValue => {
      return prevValue.filter((item,index) => {
        return id !==index
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {addItem}
       />
       {items.map((todoItem,index) => {
        return <Note
        key ={index}
        id = {index}
        title = {todoItem.title}
        content = {todoItem.content}
        onDelete = {pressDelete}
         />
       })}
      
      <Footer />
    </div>
  );
}

export default App;
