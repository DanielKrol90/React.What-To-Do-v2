import "./Content.css";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
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
    <section>
    {items.length ? (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />

            <label onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <FaTrashAlt role="button"
                        tabIndex="0"
                        onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    ) : ( 
        <p>This list is Empty, add Something</p>
    )}
    </section>
  );
};

export default Content;
