import React from 'react';
import Item from './Item';

const ListComponent = ({items}) => {
    console.info('component List', items);

    //by Vitor
    return (
        <ul className="gif-list">
            {items.map((item, key) => {
                return (
                    <li key={key} className="">
                        <Item key={key} item={item} />
                    </li>
                );
            })}
        </ul>
    );
};

ListComponent.PropTypes = {
    items: React.PropTypes.object.isRequired
};

export default ListComponent;
