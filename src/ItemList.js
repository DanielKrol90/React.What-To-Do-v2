import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />

          <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
          <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
