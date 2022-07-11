import "./Content.css";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, handleCheck, handleDelete }) => {

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
