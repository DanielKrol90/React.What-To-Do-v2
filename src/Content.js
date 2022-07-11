import './Content.css'
import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {

    const [items, setItems] = useState([
        {id: 1, checked: false, item: "Get Up from Bed"},
        {id: 2, checked: false, item: "East and Code"},
        {id: 3, checked: false, item: "Go to Sleep"}
    ]);


    return (
        <section>
            <ul>
                {items.map((item) => (
                    <li className='item'>
                        <input type="checkbox" checked={item.checked} />
                    <label>{item.item}</label>
                    <FaTrashAlt role="button" tabIndex="0" />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Content;