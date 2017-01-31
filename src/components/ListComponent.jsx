import React from 'react';
import Item from './Item';

const ListComponent = ({items}) => {
    console.info('component List', items);

    //by Vitor
    return (
        <div className="lista">
            {items.map((item, key) => {
                return (
                        <Item key={key} item={item} />
                );
            })}
        </div>
    );
};

ListComponent.PropTypes = {
    items: React.PropTypes.object.isRequired
};

export default ListComponent;
