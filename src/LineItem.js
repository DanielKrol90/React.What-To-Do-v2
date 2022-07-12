import { FaTrashAlt } from "react-icons/fa";
import React from 'react'

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
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
      aria-label={`Delete ${item.id}`}
    />
  </li>
  )
}

export default LineItem