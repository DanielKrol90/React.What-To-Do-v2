import React, { useState } from "react";

import "./App.css";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Get Up from Bed" },
    { id: 2, checked: false, item: "East and Code" },
    { id: 3, checked: false, item: "Go to Sleep" },
  ]);

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("ListOfThingsToDo", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id +1 : 1;
    const newItem = {id, checked: false,item};
    const listItems = [...items, newItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      if (!newItem) return;
        addItem(newItem);
        setNewItem('')
  };

  return (
    <div className="App">
      <Header title="List of Things to Do v.2" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleInput={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
