import React, {useState} from 'react';

function Categories({items }) {

    const [activeItem,setActiveItem] = useState(null)

    const elements = items.map((name, index) => <li
        className={ activeItem === index ? 'active' : '' }
        onClick={() => {setActiveItem(index)}} key={index}> {name} </li>)

    return (
        <div className="categories">
            <ul>
                <li  className={ activeItem === null ? 'active' : '' }
                    onClick={() => setActiveItem(null)} >Все</li>
                {elements}
            </ul>
        </div>
    );
}

export default Categories;