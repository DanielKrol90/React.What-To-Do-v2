import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

import React, { useState } from "react";



function App() {

  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Get Up from Bed" },
    { id: 2, checked: false, item: "East and Code" },
    { id: 3, checked: false, item: "Go to Sleep" },
  ]);

  const handleCheck = (id) => {
        const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem("ListOfThingsToDo", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("ListOfThingsToDo", JSON.stringify(listItems));
  }


  return (
    <div className="App">
      <Header title="List of Things to Do v.2" />
      <Content  items={items} 
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
